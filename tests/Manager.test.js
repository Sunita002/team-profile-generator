const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "7777";
    const employee = new Manager("Katrina", 1, "katrina.test@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Katrina", 1, "katrina.test@gmail.com", "katrinatest");
    expect(employee.getRole()).toBe(role);
  });