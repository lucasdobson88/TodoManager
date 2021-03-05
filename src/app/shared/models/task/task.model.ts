export class Task {
  id: string;
  title: string;
  description: string;
  type: string;
  priority: number;

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.type = data.type;
    this.priority = data.priority;
  }
}
