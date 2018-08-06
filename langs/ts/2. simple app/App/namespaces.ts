namespace Personnel{
    export class User{

    }

    export namespace Employee{
        export class Employee{

        }
    }
}

import em = Personnel.Employee.Employee;
let someUser7 = new em();

let someUser5 = new Personnel.User();
let someUser6 = new Personnel.Employee.Employee();