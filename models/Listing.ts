import { Business } from "./Business";
import { Offer } from "./Offer";

export interface Listing extends Business, Offer {
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
}
