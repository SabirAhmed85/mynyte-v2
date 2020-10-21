export function getMenuItems(
  businessId: number,
  menuTypeId: number,
  menuItemCategoryId = 0
) {
  return fetch(
    `https://www.mynyte.co.uk/staging/sneak-preview/data/sp/MenuItem.php?action=getMenuItems&_businessId=${businessId}&_menuItemCategoryId=${menuItemCategoryId}&_menuTypeId=${menuTypeId}`
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
