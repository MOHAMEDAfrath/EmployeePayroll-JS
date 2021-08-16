//EmployeePayrollData templates
class EmployeePayrollData{
    id;
    name;
    salary;
    //constructor to store data
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;     
    }
    toString(){
        return "id = "+this.id+"\nName = "+this.name+"\nSalary = "+this.salary;
    }

}
let employeePayrollData = new EmployeePayrollData(1,"Dhanush",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = 'Hello';
console.log(employeePayrollData.toString());