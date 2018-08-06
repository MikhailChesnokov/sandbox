// -- variables as var

function a() {
    if (true) {
        var ax = 4;
    }
    console.log(ax);
}

function b() {
    console.log(bx);
    var bx;
}

function c() {
    var cx = 1;
    console.log(cx);
    var cx = 2;
    console.log(cx);
}



// -- variables as let

function d() {
    if (true) {
        let dx = 1;
    }
    // console.log(dx); 
}

function e() {
    //console.log(ex);
    let ex = 1;
}

function f() {
    let fx = 1;
    console.log(fx);
    //let fx = 2;
    console.log(fx);
}



// const
const z = 2;