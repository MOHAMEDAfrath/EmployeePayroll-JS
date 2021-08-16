//EmployeePayrollData templates
class EmployeePayrollData {
  id;
  gender;
  //Refactored to add gender and salary
  salary;
  startDate;
  //constructor to store data
  constructor(...params) {
    this.id = params[0];
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(params[1])) this.name = params[1];
    else throw "Invalid name";
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }
  get name() {
    return this._name;
  }
  set name(value) {
    //regular expression to check name
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(value)) this._name = value;
    else throw "Invalid name";
  }
  toString() {
    const empDate = this.startDate === undefined ? "undefined" : this.startDate;
    return (
      "id = " +
      this.id +
      "\nName = " +
      this.name +
      "\nSalary = " +
      this.salary +
      "\nGender = " +
      this.gender +
      "\nStartDate " +
      this.startDate
    );
  }
}
var date = new Date();
let employee = new EmployeePayrollData(
  1,
  "Dhanush",
  30000,
  "M",
  date.toLocaleDateString()
);
//throws exception
try {
  employee.name = "hello";
  console.log(employee.toString());
} catch (e) {
  console.error(e);
}
try {
  employee = new EmployeePayrollData(
    1,
    "Dhanush",
    30000,
    "M",
    date.toLocaleDateString()
  );
  console.log(employee.toString());
} catch (e) {
  console.log(e);
}
