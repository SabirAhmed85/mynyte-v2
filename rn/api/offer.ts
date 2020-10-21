export function getOffersByTown(townId = 1, profileId = 0, timeScale = 'present') {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=getOffers&format=getOffersByTownId&timeScale=${timeScale}&_townId=${townId}&_profileId=${profileId}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

export function getOffersByBusiness(businessId: number, profileId = 0, timeScale = 'present') {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=getOffers&format=getOffersByBusinessId&timeScale=${timeScale}&_businessId=${businessId}&_profileId=${profileId}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

export function getOffersByEvent(listingId: number, profileId = 0) {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=getOffers&format=getOffersForEvent&_eventId=${listingId}&_profileId=${profileId}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

export function getOffers(listingId: number, profileId = 0) {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=getOffers&format=getOffers&timeScale=present&_businessId=${listingId}&_profileId=${profileId}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

export function getTodaysOffers(townId = 1) {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=getTodaysOffersForWideDisplay&_townId=${townId}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

export function getOffer(offerId: number, profileId = 0) {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=getOffers&format=getOffer&_offerId=${offerId}&_profileId=${profileId}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson[0];
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

export function createOffer(businessId: number, offerTypeId: number, offerSubCategoryId: number, offerTitle: string, description: string, startDateTime: string, endDateTime: string, weeksAhead = 0, weekdayIndex = 0, eventId = 0) {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=createOffer&_businessId='${businessId}&_offerTypeId=${offerTypeId}&_offerSubCategoryId=${offerSubCategoryId}&offerTitle=${offerTitle}&description=${description}&startDateTime=${startDateTime}&endDateTime=${endDateTime}&weeksAhead=${weeksAhead}&weekdayIndex=${weekdayIndex}&_eventId=${eventId}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson[0];
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

export function updateOffer(offerId: number, businessId: number, offerTypeId: number, offerSubCategoryId: number, offerTitle: string, description: string, startDateTime: string, endDateTime: string, weeksAhead = 0, weekdayIndex = 0, eventId = 0) {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Offer.php?action=updateOffer&_offerId=${offerId}_businessId='${businessId}&_offerTypeId=${offerTypeId}&_offerSubCategoryId=${offerSubCategoryId}&offerTitle=${offerTitle}&description=${description}&startDateTime=${startDateTime}&endDateTime=${endDateTime}&weeksAhead=${weeksAhead}&weekdayIndex=${weekdayIndex}&_eventId=${eventId}`
  )
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson[0];
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}
