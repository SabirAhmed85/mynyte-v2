import * as React from 'react';

import { OpaqueView } from '../../../../components/Themed';
import { styles } from './SearchPanel.style';

import { Listing } from '../../../../models';

import SearchContainer from './Search/Search.container';
import WhatsOpenContainer from './WhatsOpen/WhatsOpen.container';
import SearchPanel from './SearchPanel';

const reducer = (listings: Listing[], action: React.ReducerAction<React.Reducer<any, any>>) => {
  return action.item;
}

function getListingsForMainFeed() {
  return fetch('https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Listing.php?action=getListingsForFeed&_userId=2&_townId=1')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      alert(error);
      console.error(error);
    });
}

type SearchPanelProps = {
  screenWidth: number;
  route: any;
};

export default function SearchPanelContainer(props: SearchPanelProps) {
  const { screenWidth, route } = props;
  
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchType, setSearchType] = React.useState('');
  const [searchListings, dispatchSearchListings] = React.useReducer(reducer, [{}, {}, {}] as Listing[]);
  const [searchListingsLoaded, setSearchListingsLoaded] = React.useState(false);
  const [whatsOpenListings, dispatchWhatsOpenListings] = React.useReducer(reducer, [{}, {}, {}] as Listing[]);
  const [whatsOpenListingsLoaded, setWhatsOpenListingsLoaded] = React.useState(false);
  let mountedRef = React.useRef(true);

  React.useEffect(() => {
    return () => {
      mountedRef.current = false;
    }
  }, []);
  
  React.useEffect(() => {
    setShowSearch(props.route.params && (props.route.params.search !== undefined || props.route.params['whats-open'] !== undefined));
    if (props.route.params && props.route.params.search !== undefined) {
      if (!searchListingsLoaded) {
        getListingsForMainFeed().then((listings: Listing[]) => {
          if (!mountedRef.current) return null;
          dispatchSearchListings({ type: 'add', item: listings });
          setSearchListingsLoaded(true);
        });
      }
      setSearchType('search');
    }
    if (props.route.params && props.route.params['whats-open'] !== undefined) {
      if (!whatsOpenListingsLoaded) {
        getListingsForMainFeed().then((openListings: Listing[]) => {
          if (!mountedRef.current) return null;
          console.log(openListings);
          dispatchWhatsOpenListings({ type: 'add', item: openListings });
          setWhatsOpenListingsLoaded(true);
        });
      }
      setSearchType('whats-open');
    }
    
    console.log(props);
  }, [props]);

  return (
    <SearchPanel
      screenWidth={screenWidth}
      showSearch={showSearch}
      searchType={searchType}
      searchListings={searchListings}
      searchListingsLoaded={searchListingsLoaded}
      whatsOpenListings={whatsOpenListings}
      whatsOpenListingsLoaded={whatsOpenListingsLoaded} />
  )
}
