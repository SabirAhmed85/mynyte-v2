import { BusinessListing } from './business-listing.interface';

export interface EventListing extends BusinessListing {
    date?: Date;
}
