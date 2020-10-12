import * as React from 'react';

import { OpaqueView } from "../../../../../components/Themed";

import { ActionButton } from '../../../../../components/ActionButton/ActionButton';
import { FeedCategory } from '../../../../../types/feed';

export const SearchActionButtonsBar = (props: { theme: any, categories: FeedCategory[], setVisibleFeedCategoryName: React.Dispatch<React.SetStateAction<string>> }) => {
    const { theme, categories, setVisibleFeedCategoryName } = props;

    return (
        <OpaqueView style={{ flexDirection: 'row', paddingLeft: 11, paddingRight: 11 }}>
            {categories.map((category: FeedCategory, key: number) => (
                <ActionButton key={key}
                    onPress={() => {
                        categories.forEach((thisCategory: FeedCategory) => {
                            console.log(category, thisCategory);
                            thisCategory.visible = category !== thisCategory ? false : true;
                        });

                        setVisibleFeedCategoryName(category.name);
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
    )
};