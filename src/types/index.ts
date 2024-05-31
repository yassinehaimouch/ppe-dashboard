export interface Worker {
  id: string;
  name: string;
  role: string;
  image: string;
  logo: string;
  products: UserProduct[];
}

export interface ArticleType {
  id: string;
  image: string;
  time: string;
  description: string;
}

export type VisibleColumns = {
  [key: number]: boolean;
};

export interface UserProduct {
  id: number;
  count: number;
  articles: ArticleType[];
}
export type Products = Product[];

export interface Product {
  id: number;
  name: string;
  image: string;
  articles: ArticleType[];
}
