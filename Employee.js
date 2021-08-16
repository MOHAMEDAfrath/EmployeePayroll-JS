//EmployeePayrollData templates
class EmployeePayrollData{
    id;
    gender;
    //Refactored to add gender and salary
    salary;
    startDate;
    //constructor to store data
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;     
    }
    toString(){
        const empDate = this.startDate === undefined?"undefined":this.startDate; 
        return "id = "+this.id+"\nName = "+this.name+"\nSalary = "+this.salary+"\nGender = "+this.gender+"\nStartDate "+this.startDate;
    }

}
var d = new Date();
employeePayrollData = new EmployeePayrollData(1,"Dhanush",30000,'M',d.toLocaleDateString());
console.log(employeePayrollData.toString());