type Description = string;
interface IFood {
  title: string;
  image: string;
  desc: Description;
  price: string;
  id: number;
}

interface IMapData {
  title: string;
  several_branches?: number;
  address_list: string[];
  schedule: string;
  image: string;
  icon: string;
}

export type { IFood, IMapData };
