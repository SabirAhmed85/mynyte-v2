import * as React from 'react';
import { Animated, StyleProp } from 'react-native';

import { styles } from './FeedScreen.style';
import { OpaqueView, ScrollView, View, Text, ViewProps } from '../../components/Themed';

import FeedSearch from './components/FeedSearch/FeedSearch';
import SearchPanelContainer from './components/SearchPanel/SearchPanel.container';
import FeedContainer from './components/Feed/Feed.container';

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
    <React.Fragment>
      {/*<Animated.View style={[{ backgroundColor: '#fff', zIndex: zIndex, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }, { opacity: splashScreenOpacity }]}><Text>askfnksndafkn</Text></Animated.View>*/}
      <ScrollView style={{ flex: 1, maxWidth: 700, padding: 0, width: '100%', alignSelf: 'flex-start' }}>
        <OpaqueView style={{ flex: 1, padding: 0 }}>
          <FeedSearch searchCollapsed={feedSearchCollapsed} />
          <FeedContainer screenWidth={screenWidth} />
        </OpaqueView>

        <SearchPanelContainer
          screenWidth={screenWidth}
          route={route} />

      </ScrollView>
      {!isTabletOrMobileDevice &&
        <OpaqueView style={{ maxWidth: 300, position: 'absolute', top: 0, left: 750 }}>
          <Text>Hey</Text>
        </OpaqueView>
      }
    </React.Fragment>
  )
}
