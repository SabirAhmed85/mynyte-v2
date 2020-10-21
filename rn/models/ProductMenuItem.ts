export interface ProductMenuItemCategory {
  title: string;
  data: ProductMenuItem[];
}

export interface ProductMenuItem {
  _id: number;
  _businessId: number;
  _menuTypeId: number;
  _menuItemCategoryId: number;
  Description: string;
  Name: string;
  Price: string;
  isArchived: boolean;
  isHidden: boolean;
  menuItemCategoryName: string;
  _menuItemSubCategoryId?: number;
  menuItemSubCategoryName?: string;
  _copiedMenuItemId?: number;
  _menuExtraOptionId?: number;
  extraOptionsPriceRelevant?: boolean;
  iconClass?: string;
  imageURL?: string;
  tagName?: string;
}
