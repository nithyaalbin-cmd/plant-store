export interface Product {
  id: number;
  created_at: string;

  name: string;
  price: number;
  description: string;
  image: string;

  stock: boolean;
  rating: number;
}

export interface Order {
  id: number;
  created_at: string;

  customer_name: string;
  phone: string;
  address: string;

  product_name: string;

  quantity: number;
  total: number;

  status: string;
}