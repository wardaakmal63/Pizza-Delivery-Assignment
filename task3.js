// Task :3
function greet(name, callBack) {
    console.log(`Hello ${name}`);
    callBack(name);
}
function sayHello(name) {
    console.log(`Welcome ${name}`);
}
function sayGoodBye(name) {
    console.log(`Goodbye ${name}`);
}
greet("Warda", sayHello);
greet("Warda", sayGoodBye);
export {};
