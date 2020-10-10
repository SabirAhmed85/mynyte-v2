import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { Picker } from '@react-native-community/picker';
import { Button, ColorlessText, DisabledText, PrimaryText, SecondaryText, TertiaryText, Text, View } from '../../../../components/Themed';

import { useTheme } from '../../../../config/ThemeManager';
import { OpaqueView } from '../../../../components/Themed';
import { styles } from './FeedSearch.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActionButton } from '../../../../components/ActionButton/ActionButton';

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

export default function FeedSearch(props: FeedSearchProps) {
    const { theme } = useTheme();
    const [state, setState] = React.useState({
        language: 'java' as React.ReactText
    });
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
                    image: ''
                },
                {
                    name: 'Indian',
                    image: ''
                },
                {
                    name: 'Chinese',
                    image: ''
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
                    image: ''
                },
                {
                    name: 'Comedy',
                    image: ''
                },
                {
                    name: 'Horror',
                    image: ''
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
                    image: ''
                },
                {
                    name: 'Indian',
                    image: ''
                },
                {
                    name: 'Chinese',
                    image: ''
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
                    image: ''
                },
                {
                    name: 'Rugby',
                    image: ''
                },
                {
                    name: 'Cricket',
                    image: ''
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

    return (
        <View style={styles(theme).container} >
            <Collapse
                isCollapsed={searchCollapsed}
                onToggle={(collapsed: boolean) => setSearchCollapsed(collapsed)}>
                <CollapseHeader>
                    <TouchableOpacity activeOpacity={0.6}>
                        <OpaqueView style={styles(theme).searchPanelHeader}>
                            <OpaqueView style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                                <PrimaryText style={styles(theme).searchPanelHeaderText}>Find your Night in</PrimaryText>
                                <PrimaryText style={[{ color: theme.primaryActiveColorHighlight, marginLeft: 5 }, styles(theme).searchPanelHeaderText]}>Bedford</PrimaryText>
                            </OpaqueView>
                            <FontAwesome5 style={styles(theme).searchPanelHeaderIcon} name={!!searchCollapsed ? 'times' : 'search'} />
                        </OpaqueView>
                    </TouchableOpacity>
                </CollapseHeader>
                <CollapseBody>
                    <OpaqueView>
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
                                    title={category.name}
                                    containerStyle={{ flex: 1, borderRadius: 0, borderBottomColor: theme.primaryActiveBackground, borderBottomWidth: !!category.visible ? 2 : 0 }} />
                            ))}
                        </OpaqueView>
                        <OpaqueView style={{ flexDirection: 'row', paddingTop: 10, paddingLeft: 2 }}>
                            {visibleFeedCategory.items &&
                                visibleFeedCategory.items.map((item, key) => (
                                    <OpaqueView key={key} style={{ flexDirection: 'column', width: 135, backgroundColor: theme.background, borderColor: theme.searchPanelInnerBorderColor, borderWidth: 1, marginLeft: 9, marginRight: 7, marginTop: 7, marginBottom: 10 }}>
                                        <Image
                                            source={{ uri: 'https://www.mynyte.co.uk/staging/sneak-preview/img/user_images/cover_photo/bayleaf.jpg' }}
                                            resizeMode='cover'
                                            style={{ width: '100%', height: 90 }} />
                                        <Text style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 8 }}>{item.name}</Text>
                                    </OpaqueView>
                                )
                                )}
                        </OpaqueView>
                    </OpaqueView>
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
                </CollapseBody>
            </Collapse>
        </View>
    );
}