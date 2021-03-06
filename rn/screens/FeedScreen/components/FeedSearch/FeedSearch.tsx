import * as React from 'react';
import { Animated, View as DefaultView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { useTheme } from '../../../../config/ThemeManager';
import { PrimaryActiveText, TertiaryText, Text } from '../../../../components/Themed';
import { styles, stylesObjects } from './FeedSearch.style';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { FadeInPanel } from '../../../../components/FadeInPanel/FadeInPanel';
import { FeedCategory } from '../../../../types/feed';
import { FEED_SEARCH_CATEGORIES } from '../../../../constants/LookUpData';
import { SearchActionButtonsBar } from './SearchActionButtonsBar/SearchActionButtonsBar';
import { SearchSubcategoriesBar } from './SearchSubcategoriesBar/SearchSubcategoriesBar';
import { getFeedSearchImageName } from '../../../../utils/feed-search';

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
        <FadeInPanel duration={150}>
            <DefaultView style={stylesObjects(theme).container} >
                <DefaultView style={{ overflow: 'hidden' }}>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => setSearchCollapsed(!searchCollapsed)}>
                        <DefaultView style={styles(theme).searchPanelHeader}>
                            <DefaultView style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                                <PrimaryActiveText bold style={styles(theme).searchPanelHeaderText}>Find your Night in</PrimaryActiveText>
                                <PrimaryActiveText bold style={[{ color: theme.primaryActiveColorHighlight, marginLeft: 5 }, styles(theme).searchPanelHeaderText]}>Bedford</PrimaryActiveText>
                            </DefaultView>
                            <FontAwesome5 style={styles(theme).searchPanelHeaderIcon} name={!!searchCollapsed ? 'chevron-up' : 'search'} />
                        </DefaultView>
                    </TouchableOpacity>
                    <ExpandingContent searchCollapsed={searchCollapsed}>
                        <Image
                            source={getFeedSearchImageName('3.jpg')}
                            style={{ width: '100%', height: 150 }} />
                        <TertiaryText style={{ paddingLeft: 13, paddingRight: 10, marginTop: 10, paddingTop: 5, paddingBottom: 10, fontSize: 15 }}>Plan something fun...</TertiaryText>

                        <SearchActionButtonsBar theme={theme} categories={categories} visibleFeedCategoryIndex={visibleFeedCategoryIndex} setVisibleFeedCategoryIndex={setVisibleFeedCategoryIndex} />

                        {categories &&
                            categories.map((category: FeedCategory, key: number) => (
                                <SearchSubcategoriesBar key={key} theme={theme} category={category} visible={visibleFeedCategoryIndex === key} />
                            ))
                        }

                    </ExpandingContent>
                </DefaultView>
            </DefaultView>
        </FadeInPanel>
    );
}