import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import { Button, OpaqueView, TertiaryText } from '../../../../components/Themed';
// import { styles } from './FeedHeader.style';


type FeedScreenProps = {
    theme: any;
    feedType: string;
    feedTypeToggle: (feedType: string) => void;
};

export default function FeedHeader(props: FeedScreenProps) {
    const { theme, feedType, feedTypeToggle } = props;

    return (
        <OpaqueView style={{ flexDirection: 'row', height: 63, justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }}>
            {feedType === 'tonight' &&
                <TertiaryText style={{ fontSize: 15 }}>What's on Tonight...</TertiaryText>
            }
            {feedType !== 'tonight' &&
                <TertiaryText style={{ fontSize: 15 }}>Your MyNyte Feed</TertiaryText>
            }
            <OpaqueView style={{ flexDirection: 'row' }}>
                {feedType === 'tonight' &&
                    <React.Fragment>
                        <Button type='clear'
                            titleStyle={{ color: theme.disabledText }}
                            buttonStyle={{ width: 36, height: 36, borderRadius: 32, backgroundColor: theme.searchPanelHeaderBg }}
                            icon={<FontAwesome5 name='filter' size={17} color={theme.disabledText} />}></Button>
                        <Button type='clear'
                            titleStyle={{ color: theme.disabledText }}
                            containerStyle={{ marginLeft: 8 }}
                            buttonStyle={{ width: 36, height: 36, borderRadius: 32, backgroundColor: theme.searchPanelHeaderBg }}
                            icon={<FontAwesome5 name='times' size={17} color={theme.disabledText} />}
                            onPress={() => feedTypeToggle('main')}></Button>
                    </React.Fragment>
                }
                {feedType !== 'tonight' &&
                    <Button
                        type='clear'
                        buttonStyle={{ height: 36, paddingTop: 5, borderRadius: 32, backgroundColor: theme.searchPanelHeaderBg }}
                        title='Show Tonight'
                        titleStyle={{ fontSize: 13, color: theme.disabledText }}
                        onPress={() => feedTypeToggle('tonight')}></Button>
                }
            </OpaqueView>
        </OpaqueView>
    )
}
