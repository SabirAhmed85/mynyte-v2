import * as React from 'react';

import { Listing } from '../../../../../models';
import Search from './Search';

type SearchProps = {
  screenWidth: number;
  searchListings: Listing[];
  searchListingsLoaded: boolean;
};

export default function SearchContainer(props: SearchProps) {
  return (
    <Search
      screenWidth={props.screenWidth}
      searchListings={props.searchListings}
      searchListingsLoaded={props.searchListingsLoaded} />
  )
}
