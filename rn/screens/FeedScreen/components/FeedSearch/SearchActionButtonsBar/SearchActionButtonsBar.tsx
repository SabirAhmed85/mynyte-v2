import * as React from 'react';
import { Animated, Dimensions, PanResponder, View as DefaultView } from 'react-native';

import { OpaqueView } from "../../../../../components/Themed";

import { ActionButton } from '../../../../../components/ActionButton/ActionButton';
import { FeedCategory } from '../../../../../types/feed';

const reducer = (categories: FeedCategory[], action: React.ReducerAction<React.Reducer<any, any>>) => (
    action.item
);

export const SearchActionButtonsBar = (props: { theme: any, categories: FeedCategory[], visibleFeedCategoryIndex: number, setVisibleFeedCategoryIndex: React.Dispatch<React.SetStateAction<number>> }) => {
    const { theme, categories, visibleFeedCategoryIndex, setVisibleFeedCategoryIndex } = props;
    const [localCategories, dispatchLocalCategories] = React.useReducer(reducer, [{}] as FeedCategory[]);
    const [panelLeftValue, setPanelLeftValue] = React.useState(new Animated.Value(0));
    const [panelLeft, setPanelLeft] = React.useState(0);
    const [minLeft, setMinLeft] = React.useState(0);
    const [panResponderMoving, setPanResponderMoving] = React.useState(false);
    const screenWidth = Dimensions.get('window').width > 800 ? 800 : Dimensions.get('window').width;
    const itemWidthWithPadding = (screenWidth - 22) / 3;

    React.useEffect(() => {
        dispatchLocalCategories({ item: categories });
        setMinLeft(categories ? (categories.length - 2) * itemWidthWithPadding * -1 : 0);
    }, [categories]);

    /*

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => false,
        onMoveShouldSetPanResponder: (evt, gestureState) => !(gestureState.dx < 4 && gestureState.dx > -4),
        onStartShouldSetPanResponderCapture: () => false,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => !(gestureState.dx < 4 && gestureState.dx > -4),
        onPanResponderMove: (evt, gestureState) => {
            setPanResponderMoving(true);
            const val = panelLeft + gestureState.dx;
            panelLeftValue.setValue(val);
        },

        onPanResponderEnd: (evt, gestureState) => {
            if (
                gestureState.dx < 30 &&
                gestureState.dx > -30
            ) {
                Animated.spring(
                    panelLeftValue,
                    {
                        toValue: panelLeft,
                        speed: 3,
                        bounciness: 5,
                        useNativeDriver: false
                    }
                ).start(() => { setPanResponderMoving(false); });
            } else if (gestureState.dx > 30) {
                movePanel('right');
            } else if (gestureState.dx < -30) {
                movePanel('left');
            }
        },
    });

    const movePanel = (direction: string, duration = 300) => {
        let leftDestination = panelLeft;
        if (direction === 'left' && leftDestination > minLeft) {
            leftDestination = leftDestination - itemWidthWithPadding;
        }
        else if (direction === 'right' && leftDestination < itemWidthWithPadding) {
            leftDestination = leftDestination + itemWidthWithPadding;
        }
        setPanelLeft(leftDestination);
        Animated.timing(
            panelLeftValue,
            {
                toValue: leftDestination,
                duration: duration,
                useNativeDriver: false
            }
        ).start(() => {
            let newVisibleFeedCategoryIndex = visibleFeedCategoryIndex + ((direction === 'left') ? 1: -1);

            categories.forEach((thisCategory: FeedCategory, index: number) => {
                thisCategory.visible = index !== newVisibleFeedCategoryIndex ? false : true;
            });
            setVisibleFeedCategoryIndex(newVisibleFeedCategoryIndex);

            if (direction === 'left') {
                const replace = categories.shift() as FeedCategory;
                categories.push(replace);
            }
            else if (direction === 'right') {
                const replace = categories.pop() as FeedCategory;
                categories.unshift(replace);
            }
            
            dispatchLocalCategories({item: categories });
        });
    }

    */

    return (
        <OpaqueView style={{ flexDirection: 'row', paddingLeft: 11, paddingRight: 11, height: 68 }}>
            {/*<Animated.View {...panResponder.panHandlers} style={{ left: 11, flexDirection: 'row', alignContent: 'space-around', position: 'absolute', transform: [{ translateX: panelLeftValue }] }}> */}
                {localCategories.map((category: FeedCategory, key: number) => (
                    <ActionButton key={key}
                        onPress={() => {
                            /*
                            if (!panResponderMoving && key > visibleFeedCategoryIndex) {
                                movePanel('left',  350);
                            }
                            else if (!panResponderMoving && key < visibleFeedCategoryIndex) {
                                movePanel('right',  350);
                            }
                            */
                           setVisibleFeedCategoryIndex(key);
                        }}
                        icon={category.icon}
                        color={theme.tertiaryText}
                        activeColor={theme.primaryActiveColorHighlight}
                        active={visibleFeedCategoryIndex === key}
                        disabledColor='#fff'
                        title={category.name}
                        withIndicator={true}
                        indicatorColor={theme.primaryActiveColor}
                        containerStyle={{ position: 'relative', borderRadius: 0, }} />
                ))}
            {/*</Animated.View>*/}
        </OpaqueView>
    )
};