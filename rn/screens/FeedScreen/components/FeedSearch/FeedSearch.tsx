import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Animated, Image, StyleProp, ViewStyle } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { Picker } from '@react-native-community/picker';
import { Button, ColorlessText, DisabledText, PrimaryText, SecondaryText, TertiaryText, Text, View } from '../../../../components/Themed';

import { useTheme } from '../../../../config/ThemeManager';
import { OpaqueView } from '../../../../components/Themed';
import { styles } from './FeedSearch.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActionButton } from '../../../../components/ActionButton/ActionButton';
import { FadeInPanel } from '../../../../components/FadeInPanel/FadeInPanel';

type FeedSearchProps = {
    searchCollapsed: boolean;
};

type FeedCategory = {
    name: string;
    visible: boolean;
    icon: string;
    items: {
        name: string;
        image: string;
    }[]
};

const reducer = (categories: FeedCategory[], action: React.ReducerAction<React.Reducer<any, any>>) => (
    action.item
);

const ExpandingContent = (props: any) => {
    const contentHeightMax = 500;
    const contentHeightMin = 0;
    const contentHeight = React.useRef(new Animated.Value(500)).current;

    React.useEffect(() => {
        Animated.timing(
            contentHeight,
            {
                toValue: !props.searchCollapsed ? contentHeightMin : contentHeightMax,
                duration: 300,
                useNativeDriver: false,
            }
        ).start();
    }, [contentHeight, props])

    return (
        <Animated.View
            style={{
                ...props.style,
                maxHeight: contentHeight,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default function FeedSearch(props: FeedSearchProps) {
    const { theme } = useTheme();
    const [searchCollapsed, setSearchCollapsed] = React.useState(props.searchCollapsed);
    const icons = {
        'up': 'thumbs-up',
        'down': 'eye'
    };
    // let icon = (state.expanded) ? icons['up'] : icons['down'];
    const categories: FeedCategory[] = [
        {
            name: 'Restaurant',
            visible: true,
            icon: 'utensils',
            items: [
                {
                    name: 'Italian',
                    image: 'italian-food.jpg'
                },
                {
                    name: 'Indian',
                    image: 'indian-food.jpg'
                },
                {
                    name: 'Chinese',
                    image: 'chinese-food.jpg'
                }
            ]
        },
        {
            name: 'Cinema',
            visible: false,
            icon: 'ticket-alt',
            items: [
                {
                    name: 'Action',
                    image: 'action-movie.jpg'
                },
                {
                    name: 'Comedy',
                    image: 'comedy-movie.jpg'
                },
                {
                    name: 'Horror',
                    image: 'horror-movie.jpg'
                }
            ]
        },
        {
            name: 'Takeaway',
            visible: false,
            icon: 'box',
            items: [
                {
                    name: 'Pizza',
                    image: 'pizza-takeaway.jpg'
                },
                {
                    name: 'Indian',
                    image: 'indian-takeaway.jpg'
                },
                {
                    name: 'Chinese',
                    image: 'chinese-takeaway.jpg'
                }
            ]
        },
        {
            name: 'Sports Bar',
            visible: false,
            icon: 'baseball-ball',
            items: [
                {
                    name: 'Football',
                    image: 'football-sport.jpg'
                },
                {
                    name: 'Rugby',
                    image: 'rugby-sport.jpg'
                },
                {
                    name: 'Boxing',
                    image: 'boxing-sport.jpeg'
                }
            ]
        }
    ];
    const [cats, dispatchCategories] = React.useReducer(reducer, [{}] as FeedCategory[]);
    const [visibleFeedCategory, setVisibleFeedCategory] = React.useState({} as FeedCategory);
    React.useEffect(() => {
        dispatchCategories({ item: categories });
        setVisibleFeedCategory(categories[0]);
    }, []);

    React.useEffect(() => {
        if (props.searchCollapsed !== searchCollapsed) {
            setSearchCollapsed(props.searchCollapsed);
        }
    }, [props]);

    const image = 'boxing-sport.jpeg';

    const getFeedSearchImageName = (name: string) => {
        if (name === 'italian-food.jpg') {
            return require(`../../../../assets/images/feed-search/italian-food.jpg`);
        }
        else if (name === 'indian-food.jpg') {
            return require(`../../../../assets/images/feed-search/indian-food.jpg`);
        }
        else if (name === 'chinese-food.jpg') {
            return require(`../../../../assets/images/feed-search/chinese-food.jpg`);
        }
        else if (name === 'action-movie.jpg') {
            return require(`../../../../assets/images/feed-search/action-movie.jpg`);
        }
        else if (name === 'comedy-movie.jpg') {
            return require(`../../../../assets/images/feed-search/comedy-movie.jpg`);
        }
        else if (name === 'horror-movie.jpg') {
            return require(`../../../../assets/images/feed-search/horror-movie.jpg`);
        }
        else if (name === 'indian-takeaway.jpg') {
            return require(`../../../../assets/images/feed-search/indian-takeaway.jpg`);
        }
        else if (name === 'chinese-takeaway.jpg') {
            return require(`../../../../assets/images/feed-search/chinese-takeaway.jpg`);
        }
        else if (name === 'pizza-takeaway.jpg') {
            return require(`../../../../assets/images/feed-search/pizza-takeaway.jpg`);
        }
        else if (name === 'football-sport.jpg') {
            return require(`../../../../assets/images/feed-search/football-sport.jpg`);
        }
        else if (name === 'rugby-sport.jpg') {
            return require(`../../../../assets/images/feed-search/rugby-sport.jpg`);
        }
        else if (name === 'boxing-sport.jpeg') {
            return require(`../../../../assets/images/feed-search/boxing-sport.jpeg`);
        }
    }

    return (
        <FadeInPanel style={styles(theme).container} duration={150} >
            <TouchableOpacity activeOpacity={0.6} onPress={() => setSearchCollapsed(!searchCollapsed)}>
                <OpaqueView style={styles(theme).searchPanelHeader}>
                    <OpaqueView style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                        <PrimaryText style={styles(theme).searchPanelHeaderText}>Find your Night in</PrimaryText>
                        <PrimaryText style={[{ color: theme.primaryActiveColorHighlight, marginLeft: 5 }, styles(theme).searchPanelHeaderText]}>Bedford</PrimaryText>
                    </OpaqueView>
                    <FontAwesome5 style={styles(theme).searchPanelHeaderIcon} name={!!searchCollapsed ? 'times' : 'search'} />
                </OpaqueView>
            </TouchableOpacity>
            <ExpandingContent searchCollapsed={searchCollapsed}>
                <TertiaryText style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 10, fontSize: 15 }}>Plan something fun...</TertiaryText>
                <OpaqueView style={{ flexDirection: 'row', paddingLeft: 11, paddingRight: 11 }}>
                    {cats.map((category: FeedCategory, key: number) => (
                        <ActionButton key={key}
                            onPress={() => {
                                cats.forEach((thisCategory: FeedCategory) => {
                                    console.log(category, thisCategory);
                                    thisCategory.visible = category !== thisCategory ? false : true;
                                });

                                setVisibleFeedCategory(category);
                            }}
                            icon={category.icon}
                            color={theme.tertiaryText}
                            activeColor={theme.primaryActiveColorHighlight}
                            active={!!category.visible}
                            disabledColor='#fff'
                            withIndicator={true}
                            title={category.name}
                            containerStyle={{ flex: 1, borderRadius: 0 }} />
                    ))}
                </OpaqueView>
                <OpaqueView style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 2 }}>
                    {visibleFeedCategory.items &&
                        visibleFeedCategory.items.map((item, key) => (
                            <OpaqueView key={key} style={{ flexDirection: 'column', width: 135, backgroundColor: theme.background, borderColor: theme.searchPanelInnerBorderColor, borderWidth: 1, marginLeft: 9, marginRight: 7, marginTop: 7, marginBottom: 10 }}>
                                <Image
                                    source={getFeedSearchImageName(item.image)}
                                    resizeMode='cover'
                                    style={{ width: '100%', height: 90 }} />
                                <Text style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 8 }}>{item.name}</Text>
                            </OpaqueView>
                        )
                        )}
                </OpaqueView>
            </ExpandingContent>
            {/*
                    <OpaqueView style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5, padding: 10, borderTopWidth: 1, borderTopColor: theme.searchPanelInnerBorderColor }}>

                        <OpaqueView style={{ flexDirection: 'column', width: '49%' }}>
                            <Text style={{ marginBottom: 8 }}>My Town</Text>
                            <Picker
                                style={styles(theme).mainSearchPicker}
                                selectedValue={state.language}
                                onValueChange={(itemValue) =>
                                    setState({ ...state, language: itemValue })
                                }>
                                <Picker.Item label='Java' value='java' />
                                <Picker.Item label='JavaScript' value='js' />
                            </Picker>
                        </OpaqueView>
                        <OpaqueView style={{ flexDirection: 'column', width: '49%' }}>
                            <Text style={{ marginBottom: 8 }}>My Music</Text>
                            <Picker
                                mode='dropdown'
                                itemStyle={{ backgroundColor: '#000', color: '#f6f600', borderRadius: 12 }}
                                style={styles(theme).mainSearchPicker}
                                selectedValue={state.language}
                                onValueChange={(itemValue) =>
                                    setState({ ...state, language: itemValue })
                                }>
                                <Picker.Item label='All Music Styles' value='java' />
                                <Picker.Item label='Rock/Pop' value='js' />
                                <Picker.Item label='RnB/Urban' value='jsb' />
                                <Picker.Item label='Dance/Electronic' value='jsc' />
                                <Picker.Item label='Something' value='jsd' />
                            </Picker>
                        </OpaqueView>
                    </OpaqueView>
                    <PrimaryButton containerStyle={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }} title='Find my Night'></PrimaryButton>
                            */}
        </FadeInPanel>
    );
}