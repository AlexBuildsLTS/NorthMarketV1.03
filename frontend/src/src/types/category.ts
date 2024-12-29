export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface CategoryWithSubs extends Category {
  subcategories: Subcategory[];
}