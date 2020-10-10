import { Offer } from "./models";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  MyNyte: undefined;
  Offers: undefined;
  Feed: undefined;
  Covid: undefined;
  More: undefined;
};


export type MyNyteParamList = {
  MyNyteScreen: undefined;
};

export type OffersParamList = {
  OffersScreen: undefined;
  OfferScreen: {
    id: number;
    offerName: string;
  };
};

export type FeedParamList = {
  FeedScreen: undefined;
  FeedListingScreen: {
    listingType: string;
    id: number;
    listingName: string;
  };
  FeedListingOffersScreen: {
    listingType: string;
    id: number;
    listingName: string;
  };
};

export type CovidParamList = {
  CovidScreen: undefined;
};

export type MoreParamList = {
  MoreScreen: undefined;
};