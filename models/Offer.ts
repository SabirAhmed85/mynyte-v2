import { ListingBase } from "./ListingBase";

export interface OfferCategory {
  name: string;
  offers: Offer[];
}

export interface Offer extends ListingBase {
  _createdByBusinessId: number;
  businessName: string;
  businessIsFeatured: number;
  createdDateTime: string;
  currentCoverPhotoName?: string;
  currentOfferCoverPhotoName: string;
  endDateTime: string;
  name: string;
  description?: string;
  offerCategoryId: number;
  offerCategoryName: string;
  offerFoodStyle: string;
  offerSubCategoryId: number;
  offerSubCategoryName: string;
  officialEndDate: string;
  officialStartDate: string;
  relatedEventCoverPhotoName: string;
  relatedEventLastDate?: null;
  relatedEventName?: null;
  relatedEventStartDate?: null;
  relatedEventWeekdayName?: null;
  relevantEndDateTime: string;
  relevantStartDateTime: string;
  startDateTime: string;
  timeScale: string;
  todayOrFuture: string;
  totalAvailable: number;
  totalClaimed: number;
  town: string;
  voucherValue?: null;
  watch: boolean;
  weekdayIndexId?: number;
  weekdayName?: string;
  weeksAhead?: number;
  _currentCoverPhotoId?: number;
  _offerSubCategoryId: number;
  _offerTypeId: number;
  _relatedEventId?: number;
  _voucherGroupId?: number;
}
