import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${URL}`);
  }

  const data = await res.json();

  return data as Category[]; // Type assertion if necessary
};

export default getCategories;
