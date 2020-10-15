import * as Linking from 'expo-linking';
import { Offer } from '../models';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          MyNyte: {
            screens: {
              MyNyte: 'mynyte',
            },
          },
          Offers: {
            path: '',
            screens: {
              OffersScreen: {
                path: 'offers'
              },
              OfferScreen: {
                path: 'offers/:offerId/:offerName',
                parse: {
                  offerId: (offerId: string) => `${offerId}`,
                  offerName: (offerName: string) => `${offerName}`,
                },
                stringify: {
                  offerId: (offerId: string) => offerId,
                  offerName: (offerName: string) => offerName,
                },
              }
            },
          },
          Feed: {
            path: '',
            screens: {
              FeedScreen: {
                path: 'feed'
              },
              FeedListingScreen: {
                path: 'feed/:listingType/:id/:listingName',
                stringify: {
                  listingType: (listingType: string) => listingType,
                  id: (id: string) => id,
                  listingName: (listingName: string) => listingName.replace(/ & /g, '~and~').replace(/ /g, '-'),
                },
              },
              FeedListingOffersScreen: {
                path: 'feed/:listingType/:id/:listingName/offers',
                stringify: {
                  listingType: (listingType: string) => listingType,
                  id: (id: string) => id,
                  listingName: (listingName: string) => listingName.replace(/ & /g, '~and~').replace(/ /g, '-'),
                },
              },
              FeedListingOfferScreen: {
                path: 'feed/:listingType/:id/:listingName/offers/:offerId/:offerName',
                stringify: {
                  listingType: (listingType: string) => listingType,
                  id: (id: string) => id,
                  listingName: (listingName: string) => listingName.replace(/ & /g, '~and~').replace(/ /g, '-'),
                  offerId: (offerId: string) => offerId,
                  offerName: (offerName: string) => offerName,
                },
              },
              FeedListingBookTableScreen: {
                path: 'feed/:listingType/:id/:listingName/book-table',
                stringify: {
                  listingType: (listingType: string) => listingType,
                  id: (id: string) => id,
                  listingName: (listingName: string) => listingName.replace(/ & /g, '~and~').replace(/ /g, '-'),
                },
              },
              FeedListingBookEventScreen: {
                path: 'feed/:listingType/:id/:listingName/book-event',
                stringify: {
                  listingType: (listingType: string) => listingType,
                  id: (id: string) => id,
                  listingName: (listingName: string) => listingName.replace(/ & /g, '~and~').replace(/ /g, '-'),
                },
              },
              FeedListingMenuScreen: {
                path: 'feed/:listingType/:id/:listingName/menu/:menuType',
                stringify: {
                  listingType: (listingType: string) => listingType,
                  id: (id: string) => id,
                  listingName: (listingName: string) => listingName.replace(/ & /g, '~and~').replace(/ /g, '-'),
                  menuType: (menuType: string) => menuType,
                },
              },
            },
          },
          Covid: {
            screens: {
              Covid: 'covid',
            },
          },
          More: {
            screens: {
              More: 'more',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
