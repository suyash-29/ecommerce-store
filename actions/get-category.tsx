import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id:string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch Category from ${URL}/${id}`);
  }

  const data = await res.json();

  return data as Category; // Type assertion if necessary
};

export default getCategory;
