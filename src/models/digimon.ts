export type ApiResponse = {
  content: Digimon[];
};

export type Digimon = {
  id: number;
  name: string;
  url: string;
  image: string;
};
