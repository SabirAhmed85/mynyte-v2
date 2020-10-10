import { BusinessListing } from './business-listing.interface';

export interface OfferListing extends BusinessListing {
    offerTypeId: number;
}
