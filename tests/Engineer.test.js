const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "sunita002";
    const employee = new Engineer("Sam", 1, "sam.test@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Sam", 1, "sam.test@gmail.com", "samtest");
    expect(employee.getRole()).toBe(role);
  });