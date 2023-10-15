import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${URL}`);
  }

  const data = await res.json();

  return data as Size[]; // Type assertion if necessary
};

export default getSizes;
