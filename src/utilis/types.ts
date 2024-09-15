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
};
