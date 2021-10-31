const Employee = require("../lib/Employee");

test("Ability to set name using constructor function", () => {
    const name = "Joe Test";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

test("Ability to set the user ID using constructor function", () => {
    const id = "1";
    const employee = new Employee("Joe Test", id, "joe.test@gmail.com");
    expect(employee.id).toBe(id);
  });

test("Running getEmail() should return the supplied email", () => {
    const email = "joe.test@gmail.com";
    const employee = new Employee("Joe Test", 1, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Michael Scott", 1, "michael.scott@dundermifflin.com");
    expect(employee.getRole()).toBe(role);
  });