import * as React from 'react';

import { styles } from './Feed.style';

import { Listing } from '../../../../models';
import ListingCard from '../../components/ListingCard/ListingCard';
import FeedHeader from '../../components/FeedHeader/FeedHeader';
import { ScreenLoadingComponent } from '../../../../components/ScreenLoadingComponent/ScreenLoadingComponent';
import { FadeInPanel } from '../../../../components/FadeInPanel/FadeInPanel';

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
        <FadeInPanel withScaling={true} delay={feedType === 'tonight' ? 150 : 0} showPanel={feedType === 'tonight'}>
          {tonightsListings.map((listing: Listing, key: number) => (
            <ListingCard key={key} listing={listing} screenWidth={screenWidth} />
          ))}
        </FadeInPanel>
        {!!listingsLoaded &&
          <FadeInPanel withScaling={true} delay={feedType === 'main' ? 150 : 0} showPanel={feedType === 'main'}>
            {
              listings.map((listing: Listing, key: number) => (
                <ListingCard key={key} listing={listing} screenWidth={screenWidth} />
              ))
            }
          </FadeInPanel>
        }
      </React.Fragment>
    ) :
    (
      <ScreenLoadingComponent />
    )
}
