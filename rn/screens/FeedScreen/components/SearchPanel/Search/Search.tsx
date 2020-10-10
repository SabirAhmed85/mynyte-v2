import * as React from 'react';

import { Text } from '../../../../../components/Themed';

import { Listing } from '../../../../../models';

import ListingCard from '../../../components/ListingCard/ListingCard';

type SearchProps = {
  screenWidth: number;
  searchListings: Listing[];
  searchListingsLoaded: boolean;
};

export default function Search(props: SearchProps) {
  const { screenWidth, searchListings, searchListingsLoaded } = props;

  return (
    <React.Fragment>
      <Text>Search for listings in Bedford</Text>
      {!!searchListingsLoaded &&
        searchListings.map((listing: Listing, key: number) => (
          <ListingCard key={key} listing={listing} screenWidth={screenWidth} />
        ))
      }
    </React.Fragment>
  )
}
