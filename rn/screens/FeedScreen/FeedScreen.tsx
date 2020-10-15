import * as React from 'react';

import { styles } from './FeedScreen.style';
import { Button, OpaqueView, ScrollView, Text } from '../../components/Themed';

import FeedSearch from './components/FeedSearch/FeedSearch';
import SearchPanelContainer from './components/SearchPanel/SearchPanel.container';
import FeedContainer from './components/Feed/Feed.container';
import { Listing } from '@models';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableNativeFeedback } from 'react-native';

type FeedScreenProps = {
  route: any;
  theme: any;
  screenWidth: number;
  isTabletOrMobileDevice: boolean;
  isDesktop: boolean;
  handleScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => any;
  showFilter: boolean;
  feedType: string;
  feedTypeToggle: (feedType: string) => void;
};

export default function FeedScreen(props: FeedScreenProps) {
  const { route, theme, screenWidth, isTabletOrMobileDevice, isDesktop, handleScroll, showFilter, feedType, feedTypeToggle } = props;

  return (
    <React.Fragment>
      <ScrollView showsHorizontalScrollIndicator={true} style={{ padding: 0 }} contentContainerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

        {/*<Animated.View style={[{ backgroundColor: '#fff', zIndex: zIndex, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }, { opacity: splashScreenOpacity }]}><Text>askfnksndafkn</Text></Animated.View>*/}
        <ScrollView showsHorizontalScrollIndicator={false} scrollEventThrottle={96} onScroll={handleScroll} style={{ flex: 1, maxWidth: 800, padding: 0, width: '100%' }}>
          <OpaqueView style={{ flex: 1, padding: 0 }}>
            <FeedSearch />
            <FeedContainer screenWidth={screenWidth} feedType={feedType} feedTypeToggle={feedTypeToggle} />
          </OpaqueView>

          <SearchPanelContainer
            screenWidth={screenWidth}
            route={route} />

        </ScrollView>
        {/* NEED BETTER WAY TO DETECT MOBILE OR DESKTOP, THIS METHOD DIDN'T WORK ON EXPO HOSTED APP */}
        {!!isDesktop &&
          <OpaqueView style={{ maxWidth: 300, alignSelf: 'flex-start' }}>
            <Text>Hey</Text>
          </OpaqueView>
        }

      </ScrollView>
      {!!showFilter && feedType === 'tonight' &&
        <Button icon={<FontAwesome5 name='filter' size={17} color={ theme.tertiaryText } style={{ marginRight: 10 }} /> } title='Filter' titleStyle={{ color: theme.tertiaryText, fontSize: 13 }} buttonStyle={{ backgroundColor: theme.cardBackground, paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 90 }} containerStyle={{ overflow: 'hidden', zIndex: 20, position: 'absolute', bottom: 15, padding: 0, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }} />
      }
    </React.Fragment>
  )
}
