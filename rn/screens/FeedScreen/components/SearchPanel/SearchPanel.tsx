import * as React from 'react';
import { View as DefaultView } from 'react-native';

import { styles } from './SearchPanel.style';

import { Listing } from '../../../../models';

import SearchContainer from './Search/Search.container';
import WhatsOpenContainer from './WhatsOpen/WhatsOpen.container';

type SearchPanelProps = {
  screenWidth: number;
  showSearch: boolean;
  searchType: string;
  searchListings: Listing[];
  searchListingsLoaded: boolean;
  whatsOpenListings: Listing[];
  whatsOpenListingsLoaded: boolean;
};

export default function SearchPanel(props: SearchPanelProps) {
  const { screenWidth, showSearch, searchType, searchListings, searchListingsLoaded, whatsOpenListings, whatsOpenListingsLoaded } = props;

  return !!showSearch ? (
    <DefaultView style={styles.panel}>
      {searchType === 'search' &&
        <SearchContainer
          screenWidth={screenWidth}
          searchListings={searchListings}
          searchListingsLoaded={searchListingsLoaded} />
      }
      {searchType === 'whats-open' &&
        <WhatsOpenContainer
          screenWidth={screenWidth}
          whatsOpenListings={whatsOpenListings}
          whatsOpenListingsLoaded={whatsOpenListingsLoaded} />
      }
    </DefaultView>
  ) :
  (null)
}
