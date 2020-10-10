import { Listing } from './listing.interface';

export interface BusinessListing extends Listing {
    createdByBusinessId: number;
}
