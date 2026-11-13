import type { ListingSellerType } from "./listing";

export type ProductImage = {
  id: number;
  src: string;
};

export type ProductCharacteristic = {
  id: number;
  label: string;
  value: string;
};

export type ProductSeller = {
  initials: string;
  name: string;
  sellerType: ListingSellerType;
  location: string;
  rating: string;
  reviews: string;
  description: string;
  productsCount: string;
};

export type SellerProduct = {
  id: number;
  icon: string;
  price: string;
  title: string;
  meta: string;
};

export type ProductPageData = {
  breadcrumbs: string[];
  images: ProductImage[];
  price: string;
  title: string;
  publishedAt: string;
  characteristics: ProductCharacteristic[];
  description: string;
  seller: ProductSeller;
  sellerProducts: SellerProduct[];
};
