export type Product = {
  averageRaiting: number;
  category: number;
  colors: Array<string>;
  company: string;
  createdAt: string;
  description: string;
  featured: boolean;
  freeShipping: boolean;
  id: string;
  image: string;
  inventory: number;
  name: string;
  numOfReviews: number;
  price: number;
  updatedAt: string;
  user: string;
  __v: number;
  _id: string;
};
export type ProductsResponse = {
  products: Product[];
  meta: {
    categories: Array<string>;
    companies: Array<string>;
    pagination: {
      page: number;
      pages: number;
    };
  };
  totalProducts: number;
  params: {
    search: string;
    order: string;
    company: string;
    category: string;
    shipping: string;
    price: string;
  };
};
export type CartItem = {
  amount: number;
  image: string;
  price: number;
  title: string;
};
export type OrderType = {
  address: string;
  cartItems: CartItem[];
  clientSecret: string;
  createdAt: string;
  numItemsInCart: number;
  shippingFee: number;
  tax: number;
  total: number;
  updatedAt: string;
  user: string;
  userName: string;
  _id: string;
};
export type OrderResponse = {
  meta: {
    pagination: {
      page: number;
      pages: number;
      total: number;
    };
  };
  order: OrderType[];
};
