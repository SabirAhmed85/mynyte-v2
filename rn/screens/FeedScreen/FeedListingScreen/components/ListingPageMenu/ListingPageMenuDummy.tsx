import * as React from 'react';
import { View as DefaultView } from 'react-native';

import styles from './ListingPageMenu.style';

import ListMenuItem from '../../../../../components/ListMenuItem/ListMenuItem';

export default function ListingPageMenuDummy() {
  const data = [
    {
      title: 'Book a Table',
      icon: 'utensils',
      note: 'Now accepting table bookings',
      disabledNote: 'Not currently accepting table bookings',
      clickable: false
    },
    {
      title: 'Book Event Entry',
      icon: 'calendar-check',
      disabledNote: 'Not currently accepting event bookings',
      clickable: false
    },
    {
      title: 'A la Carte Menu',
      icon: 'book-open',
      shareable: true,
      disabledNote: 'Menu currently hidden',
      clickable: false
    },
    {
      title: 'Takeaway Menu',
      icon: 'box',
      shareable: true,
      disabledNote: 'Menu currently hidden',
      clickable: false
    },
    {
      title: 'See Events',
      icon: 'calendar',
      disabledNote: 'No upcoming events',
      shareable: true,
      itemCount: 0,
      clickable: false
    },
    {
      title: 'See Offers',
      icon: 'pound-sign',
      disabledNote: 'No current offers',
      shareable: true,
      itemCount: 0,
      clickable: false
    }
  ];
  let itemsToShow = data;

  return (
    <DefaultView style={styles().containerAlt}>
      {
        itemsToShow.map((item, key) => (
          <ListMenuItem key={key} item={item} />
        ))
      }
    </DefaultView>
  );
}
