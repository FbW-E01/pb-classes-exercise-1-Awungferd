// ### JS Classes

// Create the instance properties `fullname` and `email` in the `Employee` class. Given a person's first and last names:

// Form the `fullname` by simply joining the first and last name together, separated by a space.
// Form the `email` by joining the first and last name together with a `.` in between, and follow it with `@company.com` at the end. Make sure the entire email is in lowercase.
// Examples

class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    // Complete the code!
  }

}

const names = new Employee("John", "Devil");
const mail = new Employee("Frances", "Abena");

Employee.fullName = `${names.firstname}  ${names.lastname}`;
Employee.email = `${mail.firstname}.${mail.lastname}@company.com`;

console.log("Employee full name:", Employee.fullName);
console.log("Employee Email:", Employee.email.toLowerCase());
