import * as React from 'react';
import { Image, ScrollView as DefaultScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Text } from '../../../../../components/Themed';

import { FeedCategory } from '../../../../../types/feed';
import { getFeedSearchImageName } from '../../../../../utils/feed-search';

export const SearchSubcategoriesBar = (props: { theme: any, category: FeedCategory, visible: boolean }) => {
    const { theme, category, visible } = props;

    return (
        <DefaultScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            alwaysBounceVertical={false}
            style={{ flexDirection: 'row', overflow: 'hidden', marginLeft: 10, marginTop: 10, display: !!visible ? 'flex' : 'none' }}>
            {category.items &&
                category.items.map((item, key) => {
                    return (
                        <TouchableOpacity onPress={() => { alert('nav'); }} activeOpacity={0.8} key={key} style={{ flexDirection: 'column', width: 90, marginRight: 15, marginTop: 12, marginBottom: 10 }}>
                            <Image
                                source={getFeedSearchImageName(item.image)}
                                resizeMode='cover'
                                style={{ width: 70, height: 70, alignSelf: 'center' }} />
                            <Text style={{ fontSize: 13, paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 8, textAlign: 'center' }}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }
                )}
        </DefaultScrollView>
    )
};