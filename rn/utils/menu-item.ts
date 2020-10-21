import { ProductMenuItem, ProductMenuItemCategory } from "models/ProductMenuItem";

export const putMenuItemsIntoCategories = (menuItems: ProductMenuItem[]) => {
  let categories = [] as ProductMenuItemCategory[];
  menuItems.forEach((menuItem: ProductMenuItem) => {
    const existingCategory = categories.filter(category => category.title === menuItem.menuItemCategoryName)[0];

    if (existingCategory) {
      existingCategory.data.push(menuItem);
    }
    else {
      categories.push({ title: menuItem.menuItemCategoryName, data: [menuItem] });
    }
  });

  return categories;
};