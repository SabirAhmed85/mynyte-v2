import * as React from 'react';

import { styles } from './FeedScreen.style';
import { OpaqueView, ScrollView } from '../../components/Themed';

import FeedSearch from './components/FeedSearch/FeedSearch';
import SearchPanelContainer from './components/SearchPanel/SearchPanel.container';
import FeedContainer from './components/Feed/Feed.container';

type FeedScreenProps = {
  route: any;
  screenWidth: number;
  feedSearchCollapsed: boolean;
};

export default function FeedScreen(props: FeedScreenProps) {
  const { route, screenWidth, feedSearchCollapsed } = props;

  return (
    <ScrollView style={{ flex: 1, padding: 0 }}>
      <OpaqueView style={{ flex: 1, padding: 0 }}>
        <FeedSearch searchCollapsed={feedSearchCollapsed} />
        <FeedContainer screenWidth={screenWidth} />
      </OpaqueView>
      
      <SearchPanelContainer
        screenWidth={screenWidth}
        route={route}/>
        
    </ScrollView>
  )
}
