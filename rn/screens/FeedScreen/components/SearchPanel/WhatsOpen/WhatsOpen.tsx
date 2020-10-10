import * as React from 'react';

import { Listing } from '../../../../../models';

import ListingCard from '../../../components/ListingCard/ListingCard';

type WhatsOpenProps = {
  screenWidth: number;
  whatsOpenListings: Listing[];
  whatsOpenListingsLoaded: boolean;
};

export default function WhatsOpen(props: WhatsOpenProps) {
  const { screenWidth, whatsOpenListings, whatsOpenListingsLoaded } = props;

  return (
    <React.Fragment>
      {!!whatsOpenListingsLoaded &&
        whatsOpenListings.map((listing: Listing, key: number) => (
          <ListingCard key={key} listing={listing} screenWidth={screenWidth} />
        ))
      }
    </React.Fragment>
  )
}
