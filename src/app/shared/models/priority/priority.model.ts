export class Priority {
  name: string;
  value: number;
  colour?: string;

  constructor(data) {
    this.name = data.name;
    this.value = data.value;
    this.colour = data.colour;
  }
}
