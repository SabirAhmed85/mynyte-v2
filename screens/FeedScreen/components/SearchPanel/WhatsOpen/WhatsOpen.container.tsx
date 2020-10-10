import * as React from 'react';

import { Listing } from '../../models';
import { Dimensions } from 'react-native';
import WhatsOpen from './WhatsOpen';
import { useTheme } from '../../config/ThemeManager';

const reducer = (listings: Listing[], action: React.ReducerAction<React.Reducer<any, any>>) => {
  return action.item;
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

type WhatsOpenProps = {
  screenWidth: number;
  whatsOpenListings: Listing[];
  whatsOpenListingsLoaded: boolean;
};

export default function WhatsOpenContainer(props: WhatsOpenProps) {
  return (
    <WhatsOpen
      screenWidth={props.screenWidth}
      whatsOpenListings={props.whatsOpenListings}
      whatsOpenListingsLoaded={props.whatsOpenListingsLoaded} />
  )
};
