import * as React from 'react';

import { useTheme } from '../../../../config/ThemeManager';

import { Listing } from '../../../../models';

import Feed from './Feed';

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

function getListingsForFoodFeed() {
  return fetch('https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Listing.php?action=getListingsForFoodFeed&_userId=2&_townId=1')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      alert(error);
      console.error(error);
    });
}

type FeedContainerProps = {
  screenWidth: number;
};

export default function FeedContainer(props: FeedContainerProps) {
  const { theme } = useTheme();
  const { screenWidth } = props;
  const [tonightsListings, dispatchTonightsListings] = React.useReducer(reducer, [{}, {}, {}] as Listing[]);
  const [loaded, setLoaded] = React.useState(false);
  const [listings, dispatchListings] = React.useReducer(reducer, [{}, {}, {}] as Listing[]);
  const [listingsLoaded, setListingsLoaded] = React.useState(false);
  const [feedType, setFeedType] = React.useState('tonight');
  let mountedRef = React.useRef(true);

  React.useEffect(() => {
    setTimeout(() => {
      getListingsForFoodFeed().then((listings: Listing[]) => {
        if (!mountedRef.current) return null;
        dispatchTonightsListings({ type: 'add', item: listings });
        setLoaded(true);
      });
      }, 200);

    return () => {
      mountedRef.current = false;
    }
  }, []);

  const feedTypeToggle = (feedType: string) => {
    if (feedType === 'main' && !listingsLoaded) {
      loadListingsForMainFeed();
    }
    else {
      setFeedType(feedType);
    }
  }

  const loadListingsForMainFeed = () => {
    getListingsForMainFeed().then((listings: Listing[]) => {
      if (!mountedRef.current) return null;
      dispatchListings({ type: 'add', item: listings });
      setListingsLoaded(true);
      setFeedType('main');
    });
  }

  return (
    <Feed
      theme={theme}
      tonightsListings={tonightsListings}
      loaded={loaded}
      listings={listings}
      listingsLoaded={listingsLoaded}
      screenWidth={screenWidth}
      feedType={feedType}
      feedTypeToggle={feedTypeToggle} />
  )
}
