import { RestaurantSettings } from './restaurant-settings.interface';

export interface Listing {
    listingId: number;
    title: string;
    description: string;
    listingType: string;
    totalOffers?: number;
    totalEvents?: number;

    businessType?: 'restaurant' | 'takeaway' | 'nightclub' | 'bar' | 'cinema';
    restaurantSettings?: RestaurantSettings;
}
