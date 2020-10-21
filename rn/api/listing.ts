export function getListingsForMainFeed() {
  return fetch(
    "https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Listing.php?action=getListingsForFeed&_userId=2&_townId=1"
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

export function getListingsForFoodFeed() {
  return fetch(
    "https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Listing.php?action=getListingsForFoodFeed&_userId=2&_townId=1"
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

export function getFeedListing(id: number, listingType: string) {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/Profile.php?action=getListings&_listingId=${id}&listingType=${listingType}&_profileId=2`
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
