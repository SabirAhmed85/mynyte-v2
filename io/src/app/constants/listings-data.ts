import { Listing } from '../models';

export const listings: Listing[] = [
  {
    listingId: 1,
    title: 'New Listing 1',
    description: 'Description',
    listingType: 'business',
    totalOffers: 0,
    totalEvents: 0,
    businessType: 'restaurant',
    restaurantSettings: {
      acceptingTableBookings: false,
    },
  },
  {
    listingId: 2,
    title: 'New Listing 2',
    description: 'Description',
    listingType: 'business',
    totalOffers: 6,
    totalEvents: null,
    businessType: 'restaurant',
    restaurantSettings: {
      acceptingTableBookings: true,
    },
  },
  {
    listingId: 3,
    businessType: 'nightclub',
    title: 'New Listing 3',
    description: 'Description',
    listingType: 'event',
    totalOffers: 5,
    totalEvents: 0,
  },
  {
    listingId: 4,
    businessType: 'nightclub',
    title: 'New Listing 4',
    description: 'Description',
    listingType: 'business',
    totalOffers: 4,
    totalEvents: 2
  },
  {
    listingId: 5,
    title: 'New Listing 5',
    description: 'Description',
    listingType: 'event',
    totalOffers: null,
    totalEvents: 2,
  },
  {
    listingId: 6,
    title: 'New Listing 6',
    description: 'Description',
    listingType: 'business',
    totalOffers: 8,
    totalEvents: 4,
  },
  {
    listingId: 7,
    title: 'New Listing 7',
    description: 'Description',
    listingType: 'event',
    totalOffers: 9,
  },
  {
    listingId: 8,
    title: 'New Listing 8',
    description: 'Description',
    listingType: 'business',
    totalOffers: null,
    totalEvents: 6,
  },
];
