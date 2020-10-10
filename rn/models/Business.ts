import { ListingBase } from "./ListingBase";

export interface Business extends ListingBase {
  _profileId: number;
  name: string;
  town: string;
  listingId: number;
  relListingId: number;
  listingType: string;
  listingType1: string;
  listingType2: string;
  listingType3: string;
  title: string;
  description?: string;
  currentCoverPhotoName?: string;
  like?: boolean;
  totalOffers: number;
  totalUpcomingEvents: number;
  isAcceptingTableBookings: boolean;
  hasCarteMenuItem?: string;
  hasTakeawayMenuItem?: string;
}
