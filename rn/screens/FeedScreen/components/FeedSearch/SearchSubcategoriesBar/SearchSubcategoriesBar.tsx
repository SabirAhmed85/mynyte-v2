import * as React from 'react';
import { Animated, Image, PanResponder } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { OpaqueView, Text } from "../../../../../components/Themed";

import { FeedCategory } from '../../../../../types/feed';
import { getFeedSearchImageName } from '../../../../../helpers/FeedSearchHelpers';

export const SearchSubcategoriesBar = (props: { theme: any, category: FeedCategory, visible: boolean }) => {
    const { theme, category, visible } = props;
    const [panelLeftValue, setPanelLeftValue] = React.useState(new Animated.Value(0));
    const [panelLeft, setPanelLeft] = React.useState(0);
    const [minLeft, setMinLeft] = React.useState(category.items ? (category.items.length - 2) * 150 * -1 : 0);

    React.useEffect(() => {
        setMinLeft(category.items ? (category.items.length - 2) * 150 * -1 : 0);
    }, [category]);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (evt, gestureState) => !(gestureState.dx < 4 && gestureState.dx > -4),
        onStartShouldSetPanResponderCapture: () => false,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => !(gestureState.dx < 4 && gestureState.dx > -4),
        onPanResponderMove: (evt, gestureState) => {
            const val = panelLeft + gestureState.dx;
            panelLeftValue.setValue(val);
            console.log('hey');
            if (gestureState.dx > 40) {

            } else if (gestureState.dx < -40) {

            }
        },
        
        onPanResponderEnd: (evt, gestureState) => {
            console.log('release', gestureState.dx);
            if (
                gestureState.dx < 40 &&
                gestureState.dx > -40
            ) {
                Animated.spring(
                    panelLeftValue,
                    {
                        toValue: panelLeft,
                        speed: 2,
                        bounciness: 10,
                        useNativeDriver: false
                    }
                ).start();
            } else if (gestureState.dx > 40) {
                movePanel('right');
            } else if (gestureState.dx < -40) {
                movePanel('left');
            }
        },
    });

    const movePanel = (direction: string) => {
        let leftDestination = panelLeft;
        if (direction === 'left' && leftDestination > minLeft) {
            leftDestination = leftDestination - 150;
        }
        else if (direction === 'right' && leftDestination < 0) {
            leftDestination = leftDestination + 150;
        }
        setPanelLeft(leftDestination);
        Animated.spring(
            panelLeftValue,
            {
                toValue: leftDestination,
                speed: 2,
                bounciness: 10,
                useNativeDriver: false
            }
        ).start();
    }

    return (
        <OpaqueView style={{ overflow: 'hidden', marginLeft: 10, minHeight: 155, display: !!visible ? 'flex' : 'none' }}>

            <Animated.View {...panResponder.panHandlers} style={{ paddingTop: 10, flexDirection: 'row', position: 'absolute', transform: [{ translateX: panelLeftValue }] }}>
                {category.items &&
                    category.items.map((item, key) => (
                        <TouchableOpacity onPress={() => { alert('nav'); }} activeOpacity={0.8} key={key} style={{ flexDirection: 'column', width: 135, backgroundColor: theme.background, borderColor: theme.searchPanelInnerBorderColor, borderWidth: 1, marginRight: 15, marginTop: 7, marginBottom: 10 }}>
                            <Image
                                source={getFeedSearchImageName(item.image)}
                                resizeMode='cover'
                                style={{ width: '100%', height: 90 }} />
                            <Text style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 8 }}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                    )}
            </Animated.View>
        </OpaqueView>
    )
};