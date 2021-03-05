import { Priority } from './priority.model';

const data = {
  name: "Critical",
  value: 3,
  colour: "#f00"
};

describe("Priority", () => {
  it("should create an instance", () => {
    const priority = new Priority(data);
    expect(priority.name).toBe(data.name);
    expect(priority.value).toBe(data.value);
    expect(priority.colour).toBe(data.colour);
  });
});
