export type ListingBadge = "Даром" | "Забронировано";

export type ListingBackground = "beige" | "sage" | "green" | "pink";

export type ListingSellerType = "частник" | "магазин";

export type Listing = {
  id: number;
  icon: string;
  imageBackground: ListingBackground;
  price: string;
  title: string;
  meta: string;
  sellerType: ListingSellerType;
  location: string;
  badge?: ListingBadge;
};
