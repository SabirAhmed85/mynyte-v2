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
                path: 'offers/:id/:offerName',
                parse: {
                  id: (id: number) => `${id}`,
                  offerName: (offerName: string) => `${offerName}`,
                },
                stringify: {
                  id: (id: string) => id,
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
