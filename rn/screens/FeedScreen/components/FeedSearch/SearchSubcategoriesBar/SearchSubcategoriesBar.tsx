import * as React from 'react';
import { Animated, Image, PanResponder, ScrollView as DefaultScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text } from '../../../../../components/Themed';

import { FeedCategory } from '../../../../../types/feed';
import { getFeedSearchImageName } from '../../../../../helpers/FeedSearchHelpers';

export const SearchSubcategoriesBar = (props: { theme: any, category: FeedCategory, visible: boolean }) => {
    const { theme, category, visible } = props;

    return (
        <DefaultScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: 'row', overflow: 'hidden', marginLeft: 10, marginTop: 10, display: !!visible ? 'flex' : 'none' }}>
            {category.items &&
                category.items.map((item, key) => {
                    if (category.name === 'Cinema') {
                        return (
                            <TouchableOpacity onPress={() => { alert('nav'); }} activeOpacity={0.8} key={key} style={{ flexDirection: 'column', width: 90, marginRight: 15, marginTop: 12, marginBottom: 10 }}>
                                <Image
                                    source={getFeedSearchImageName(item.image)}
                                    resizeMode='cover'
                                    style={{ width: 70, height: 70, alignSelf: 'center' }} />
                                <Text style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 8, textAlign: 'center' }}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }
                    else {
                        return (
                            <TouchableOpacity onPress={() => { alert('nav'); } } activeOpacity={0.8} key={key} style={{ flexDirection: 'column', width: 135, backgroundColor: theme.background, borderColor: theme.searchPanelInnerBorderColor, borderWidth: 1, marginRight: 15, marginTop: 7, marginBottom: 10 }}>
                                <Image
                                    source={getFeedSearchImageName(item.image)}
                                    resizeMode='cover'
                                    style={{ width: '100%', height: 90 }} />
                                <Text style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 8 }}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }
                }
                )}
        </DefaultScrollView>
    )
};