export type Recipe = {
  id?: string;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  author: string;
  authorId: string;
  createdAt?: string;
  updatedAt?: string;
};
