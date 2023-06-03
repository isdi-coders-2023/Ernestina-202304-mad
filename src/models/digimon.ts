export type ApiResponse = {
  content: DigimonLink[];
};

export type DigimonLink = {
  href: string;
};

type Attributes = {
  id: number;
  attribute: string;
};

export type Description = {
  origin: string;
  language: string;
  description: string;
};

type Level = {
  id: number;
  level: string;
};

type Type = {
  type: string;
};

export type Image = {
  href: string;
};

export type Digimon = {
  images: Image[];
  id: number;
  name: string;
  attributes: Attributes[];
  descriptions: Description[];
  levels: Level[];
  releaseDate: string;
  types: Type[];
};

export interface DigimonRepo {
  getAll(query: string, currentPage: number): Promise<ApiResponse>;
}
