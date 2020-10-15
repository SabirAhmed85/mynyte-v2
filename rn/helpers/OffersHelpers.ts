import { Offer, OfferCategory } from "../models";

export const putOffersIntoCategories = (offers: Offer[]) => {
  let categories = [] as OfferCategory[];
  offers.forEach((offer: Offer) => {
    const existingCategory = categories.filter(category => category.name === offer.offerSubCategoryName)[0];

    if (existingCategory) {
      existingCategory.offers.push(offer);
    }
    else {
      categories.push({ name: offer.offerSubCategoryName, offers: [offer] });
    }
  });

  return categories;
};