class FirmBase {
    protected organizationName: string;

    constructor(organizationName: string) {
        this.organizationName = organizationName;
    }

    getInfo(): void {
        console.log("Organization: " + this.organizationName);
    }
}

class Firm extends FirmBase {
    protected inn: string;
    protected kpp: string;

    constructor(orgName: string, inn: string, kpp: string) {
        super(orgName);

        this.inn = inn;
        this.kpp = kpp;
    }

    getInfo(): void {
        super.getInfo();
        console.log(`INN/KPP: ${this.inn}/${this.kpp}`);
    }
}

let extendedFirm = class extends Firm {
    protected sales: number;

    constructor(orgName: string, inn: string, kpp: string, sales: number) {
        super(orgName, inn, kpp);

        this.sales = sales;
    }
}


// Abstract classes

abstract class Figure {
    abstract getArea(): number;
}

class Rectangle extends Figure {
    width: number;
    height: number;

    getArea(): number {
        return this.height * this.width;
    }
}

// Interfaces

interface IFigure {
    name: string;
    area?: number; // Необязательное свойство
    readonly color: string; // Только для чтения

    getArea(): number;
}

let smt: IFigure = {
    name: "as",
    color: "as",
    getArea(): number {
        return 1;
    }
}

class Circle implements IFigure {
    name: string;
    readonly color: string;

    getArea(): number {
        throw new Error("Not implemented");

    }
}

// Интерфейсы функций

interface IFullNameBuilder {
    (name: string, surname: string) : string;
}

let nameBuilder: IFullNameBuilder = (name: string, surname: string): string => name + ' ' + surname

// Интерфейсы массивов

interface IStrignArray {
    [index: number] : string;
}

let someArray: IStrignArray = ["1", "2", "3"];

// Гибридный интерфейс

interface IPersonInfo {
    (name: string, surname: string): void;
    name: string;
    getInfo();
}

function personBuilder(): IPersonInfo{
    let person = <IPersonInfo>function(name: string, surname: string): void{

    };
    return person;
}
let pb = personBuilder();
pb.name = 'a';