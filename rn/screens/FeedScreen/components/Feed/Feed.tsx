import * as React from 'react';

import { styles } from './Feed.style';

import { OpaqueView } from '../../../../components/Themed';
import { Listing } from '../../../../models';
import ListingCard from '../../components/ListingCard/ListingCard';
import FeedHeader from '../../components/FeedHeader/FeedHeader';
import { ScreenLoadingComponent } from '../../../../components/ScreenLoadingComponent/ScreenLoadingComponent';

type FeedProps = {
  theme: any;
  tonightsListings: Listing[];
  loaded: boolean;
  listings: Listing[];
  listingsLoaded: boolean;
  screenWidth: number;
  feedType: string;
  feedTypeToggle: (feedType: string) => void;
};

export default function Feed(props: FeedProps) {
  const { theme, tonightsListings, loaded, listings, listingsLoaded, screenWidth, feedType, feedTypeToggle } = props;

  return !!loaded ? 
  (
    <React.Fragment>
      <FeedHeader theme={theme} feedType={feedType} feedTypeToggle={feedTypeToggle} />
      <OpaqueView style={{ display: (feedType === 'tonight') ? 'flex' : 'none' }}>
        {tonightsListings.map((listing: Listing, key: number) => (
          <ListingCard key={key} listing={listing} screenWidth={screenWidth} />
        ))}
      </OpaqueView>
      {!!listingsLoaded &&
        <OpaqueView style={{ display: (feedType === 'main') ? 'flex' : 'none' }}>
          {
            listings.map((listing: Listing, key: number) => (
              <ListingCard key={key} listing={listing} screenWidth={screenWidth} />
            ))
          }
        </OpaqueView>
      }
    </React.Fragment>
  ) :
  (
    <ScreenLoadingComponent />
  )
}
