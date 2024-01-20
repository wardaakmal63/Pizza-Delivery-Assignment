// Task :3



type Callback = (a: string) => void;

function greet(name: string, callBack: Callback) {
    console.log(`Hello ${name}`);
    callBack(name);
}

function sayHello(name: string) {
    console.log(`Welcome ${name}`);
}

function sayGoodBye(name: string) {
    console.log(`Goodbye ${name}`);
}

greet("Warda", sayHello);
greet("Warda", sayGoodBye);
