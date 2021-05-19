// ### JS Classes

// Create the instance properties `fullname` and `email` in the `Employee` class. Given a person's first and last names:

class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    // Complete the code!
  }
  // Form the `fullname` by simply joining the first and last name together, separated by a space.
  fullName() {
    console.log(`emp full name: ${this.firstname} ${this.lastname}`);
  }
  // Form the `email` by joining the first and last name together with a `.` in between, and follow it with `@company.com` at the end. Make sure the entire email is in lowercase.
  email() {
    console.log(
      `emp email: ${this.firstname}.${this.lastname}@company.com`.toLowerCase()
    );
  }
}
const emp1 = new Employee("Awandem", "Aminde");
const emp2 = new Employee("Parker", "Johnson");
const emp3 = new Employee("Haitaku", "Arusha");
emp1.fullName();
emp1.email();
emp2.fullName();
emp2.email();
emp3.fullName();
emp3.email();

