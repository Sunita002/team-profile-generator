const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "malloryfaria";
    const employee = new Engineer("Sunita", 1, "sunita.persad020@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Sunita", 1, "sunita.persad020@gmail.com", "sunitapersad");
    expect(employee.getRole()).toBe(role);
  });