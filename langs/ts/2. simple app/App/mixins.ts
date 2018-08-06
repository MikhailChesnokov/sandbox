class Animal{
    feed(): void{

    }
}

class Transport {
    move(): void{

    }
}

class Horse implements Animal, Transport{
    feed: () => void;
    move: () => void;
}


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(Horse, [Animal, Transport]);