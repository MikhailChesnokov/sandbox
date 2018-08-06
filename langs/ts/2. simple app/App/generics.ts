function getId<T>(id: T): T {
    return id;
}

function getStringArray<T>(arr: Array<T>): T{
    return arr[0];
}

class SomeUser5<T> {
    id: T;
}

class SomeUser6<T extends string>{
    id: T;
}

function someGenericFunc<T>(someVar: {new (): T}): void {

}

