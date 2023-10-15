import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch Color from ${URL}`);
  }

  const data = await res.json();

  return data as Color[]; // Type assertion if necessary
};

export default getColors;
