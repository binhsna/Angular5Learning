// Dấu ! đánh dấu field không null/undefined
export class Movie {
  id!: number;
  name!: string;
  releaseYear!: number;

  constructor(id: number, name: string, releaseYear: number) {
    this.id = id;
    this.name = name;
    this.name = name;
  }
}
