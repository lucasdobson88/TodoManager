import { Task } from './task.model';

describe("Task", () => {
  const data = {
    id: "123",
    title: "Go to work",
    description: "You have to go to work by 9am",
    priority: 3,
    type: "Business"
  };

  it("should create an instance", () => {
    const task = new Task(data);
    expect(task).toBeTruthy();
    expect(task.id).toBe(data.id);
    expect(task.title).toBe(data.title);
    expect(task.description).toBe(data.description);
    expect(task.priority).toBe(data.priority);
    expect(task.type).toBe(data.type);
  });
});
