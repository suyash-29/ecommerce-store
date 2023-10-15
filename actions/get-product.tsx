import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id:string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch Product from ${URL}/${id}`);
  }

  const data = await res.json();

  return data as Product; // Type assertion if necessary
};

export default getProduct;
