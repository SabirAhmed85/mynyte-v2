import * as React from 'react';

import { styles } from './FeedScreen.style';
import { OpaqueView, ScrollView, Text } from '../../components/Themed';

import FeedSearch from './components/FeedSearch/FeedSearch';
import SearchPanelContainer from './components/SearchPanel/SearchPanel.container';
import FeedContainer from './components/Feed/Feed.container';
import { Listing } from '@models';

type FeedScreenProps = {
  route: any;
  theme: any;
  screenWidth: number;
  feedSearchCollapsed: boolean;
  isTabletOrMobileDevice: boolean;
  isDesktop: boolean;
};

export default function FeedScreen(props: FeedScreenProps) {
  const { route, theme, screenWidth, feedSearchCollapsed, isTabletOrMobileDevice, isDesktop } = props;

  return (
    <ScrollView style={{ padding: 0 }} contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

      {/*<Animated.View style={[{ backgroundColor: '#fff', zIndex: zIndex, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }, { opacity: splashScreenOpacity }]}><Text>askfnksndafkn</Text></Animated.View>*/}
      <ScrollView style={{ flex: 1, maxWidth: 800, padding: 0, width: '100%' }}>
        <OpaqueView style={{ flex: 1, padding: 0 }}>
          <FeedSearch searchCollapsed={feedSearchCollapsed} />
          <FeedContainer screenWidth={screenWidth} />
        </OpaqueView>

        <SearchPanelContainer
          screenWidth={screenWidth}
          route={route} />

      </ScrollView>
      {!isTabletOrMobileDevice &&
        <OpaqueView style={{ maxWidth: 300, alignSelf: 'flex-start' }}>
          <Text>Hey</Text>
        </OpaqueView>
      }
    </ScrollView>
  )
}
