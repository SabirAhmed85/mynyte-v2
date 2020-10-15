import * as React from 'react';
import { Animated, View as DefaultView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { Picker } from '@react-native-community/picker';

import { PrimaryText, TertiaryText } from '../../../../components/Themed';
import { styles, stylesObjects } from './FeedSearch.style';

import { useTheme } from '../../../../config/ThemeManager';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FadeInPanel } from '../../../../components/FadeInPanel/FadeInPanel';
import { FeedCategory } from '../../../../types/feed';
import { FEED_SEARCH_CATEGORIES } from '../../../../constants/LookUpData';
import { SearchActionButtonsBar } from './SearchActionButtonsBar/SearchActionButtonsBar';
import { SearchSubcategoriesBar } from './SearchSubcategoriesBar/SearchSubcategoriesBar';

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

export default function FeedSearch() {
    const { theme } = useTheme();
    const [categories, dispatchCategories] = React.useReducer(reducer, [{}] as FeedCategory[]);
    const [visibleFeedCategoryIndex, setVisibleFeedCategoryIndex] = React.useState(0);
    const [searchCollapsed, setSearchCollapsed] = React.useState(true);
    const feedSearchCategories = FEED_SEARCH_CATEGORIES;

    React.useEffect(() => {
        dispatchCategories({ item: feedSearchCategories });
    }, []);

    return (
        <FadeInPanel style={stylesObjects(theme).container} duration={150} >
            <TouchableOpacity activeOpacity={0.6} onPress={() => setSearchCollapsed(!searchCollapsed)}>
                <DefaultView style={styles(theme).searchPanelHeader}>
                    <DefaultView style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                        <PrimaryText style={styles(theme).searchPanelHeaderText}>Find your Night in</PrimaryText>
                        <PrimaryText style={[{ color: theme.primaryActiveColorHighlight, marginLeft: 5 }, styles(theme).searchPanelHeaderText]}>Bedford</PrimaryText>
                    </DefaultView>
                    <FontAwesome5 style={styles(theme).searchPanelHeaderIcon} name={!!searchCollapsed ? 'chevron-up' : 'search'} />
                </DefaultView>
            </TouchableOpacity>
            <ExpandingContent searchCollapsed={searchCollapsed}>
                <TertiaryText style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 10, fontSize: 15 }}>Plan something fun...</TertiaryText>
                
                <SearchActionButtonsBar theme={theme} categories={categories} visibleFeedCategoryIndex={visibleFeedCategoryIndex} setVisibleFeedCategoryIndex={setVisibleFeedCategoryIndex} />

                {categories &&
                categories.map((category: FeedCategory, key: number) => (
                    <SearchSubcategoriesBar key={key} theme={theme} category={category} visible={visibleFeedCategoryIndex === key} />
                ))
                }
                
            </ExpandingContent>
            {/*
                    <DefaultView style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5, padding: 10, borderTopWidth: 1, borderTopColor: theme.searchPanelInnerBorderColor }}>

                        <DefaultView style={{ flexDirection: 'column', width: '49%' }}>
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
                        </DefaultView>
                        <DefaultView style={{ flexDirection: 'column', width: '49%' }}>
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
                        </DefaultView>
                    </DefaultView>
                    <PrimaryButton containerStyle={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }} title='Find my Night'></PrimaryButton>
                            */}
        </FadeInPanel>
    );
}