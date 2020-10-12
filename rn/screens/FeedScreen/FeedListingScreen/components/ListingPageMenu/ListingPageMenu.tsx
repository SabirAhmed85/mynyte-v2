import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '../../../../../config/ThemeManager';
import { OpaqueView } from '../../../../../components/Themed';
import styles from './ListingPageMenu.style';

import { Listing } from '../../../../../models';

import ListMenuItem from '../../../../../components/ListMenuItem/ListMenuItem';

interface MenuItemProps extends ItemMainContentProps {
  shareable?: boolean;
};

type ItemMainContentProps = {
  title: string;
  icon: string;
  clickable: boolean;
  iconColor?: string;
  note?: string;
  disabledNote?: string;
  itemCount?: number;
  clickNavigation?: {
    screen: string;
    params: any;
  };
};

export default function ListingPageMenu(props: { listing: Listing }) {
  const { theme } = useTheme();
  const nav = useNavigation();
  const onPress = () => {
    nav.navigate('Feed', { screen: 'FeedListingScreen', params: { listingType: listing.listingType, id: listing.relListingId, listingName: listing.name } });
  };

  const listing = props.listing;
  const listingListingTypes = [listing.listingType1, listing.listingType2, listing.listingType3];
  const data: ((listing: Listing) => MenuItemProps[]) = (listing: Listing) => ([
    {
      title: 'Book a Table',
      icon: 'utensils',
      note: 'Now accepting table bookings',
      disabledNote: 'Not currently accepting table bookings',
      clickable: false,
      clickNavigation: {
        screen: 'FeedListingBookTableScreen',
        params: { id: listing.relListingId, listingType: listing.listingType, listingName: listing.name }
      }
    },
    {
      title: 'Book Event Entry',
      icon: 'calendar-check',
      disabledNote: 'Not currently accepting event bookings',
      clickable: false,
      clickNavigation: {
        screen: 'FeedListingBookEventEntryScreen',
        params: { id: listing.relListingId, listingType: listing.listingType, listingName: listing.name }
      }
    },
    {
      title: 'A la Carte Menu',
      icon: 'book-open',
      shareable: true,
      disabledNote: 'Menu currently hidden',
      clickable: false,
      clickNavigation: {
        screen: 'FeedListingMenuScreen',
        params: { id: listing.relListingId, listingType: listing.listingType, listingName: listing.name }
      }
    },
    {
      title: 'Takeaway Menu',
      icon: 'box',
      shareable: true,
      disabledNote: 'Menu currently hidden',
      clickable: false,
      clickNavigation: {
        screen: 'FeedListingMenuScreen',
        params: { id: listing.relListingId, listingType: listing.listingType, listingName: listing.name }
      }
    },
    {
      title: 'See Events',
      icon: 'calendar',
      disabledNote: 'No upcoming events',
      shareable: true,
      itemCount: 0,
      clickable: false,
      clickNavigation: {
        screen: 'FeedListingEventsScreen',
        params: { id: listing.relListingId, listingType: listing.listingType, listingName: listing.name }
      }
    },
    {
      title: 'See Offers',
      icon: 'pound-sign',
      disabledNote: 'No current offers',
      shareable: true,
      itemCount: 0,
      clickable: false,
      clickNavigation: {
        screen: 'FeedListingOffersScreen',
        params: { id: listing.relListingId, listingType: listing.listingType, listingName: listing.name }
      }
    }
  ]);
  let itemsToShow = data(listing);

  if (!listingListingTypes.includes('Restaurant')) {
    itemsToShow = itemsToShow.filter(item => item.title !== 'Book a Table' && item.title !== 'A la Carte Menu');
  }

  if (!listingListingTypes.includes('Takeaway')) {
    itemsToShow = itemsToShow.filter(item => item.title !== 'Takeaway Menu');
  }

  if (!listingListingTypes.includes('Nightclub')) {
    itemsToShow = itemsToShow.filter(item => item.title !== 'See Events' && item.title !== 'Book Event Entry');
  }

  itemsToShow.forEach(item => {
    if (item.title === 'See Offers' && listing.totalOffers > 0) {
      item.itemCount = listing.totalOffers;
      item.clickable = true;
    }
    if (item.title === 'See Events' && listing.totalUpcomingEvents > 0) {
      item.itemCount = listing.totalUpcomingEvents;
      item.clickable = true;
    }
    if (item.title === 'A la Carte Menu' && listing.hasCarteMenuItem) {
      item.clickable = true;
    }
    if (item.title === 'Takeaway Menu' && listing.hasTakeawayMenuItem) {
      item.clickable = true;
    }
    if (item.title === 'Book a Table' && !!listing.isAcceptingTableBookings) {
      item.clickable = true;
    }
    if (item.title === 'Book Event Entry' && !!listing.isAcceptingTableBookings) {
      item.clickable = true;
    }
  });

  return (
    <OpaqueView style={styles().containerAlt}>
      {
        itemsToShow.map((item, key) => (
          <ListMenuItem key={key} item={item} />
        ))
      }
    </OpaqueView>
  );
}
