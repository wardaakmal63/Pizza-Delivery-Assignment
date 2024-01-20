// task 1 :
"use strict";
const pr = new Promise((resolve, reject) => {
    let pizzadelivery = true;
    if (pizzadelivery) {
        resolve("Pizza is ready");
    }
    else {
        reject("Pizza is not ready");
    }
});
const order = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pizza is ordered");
    }, 2000);
});
const payment = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Checking the payment");
    }, 2000);
});
const summaryPayment = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Customer is reviewing the payment");
    }, 2000);
});
const updateWallet = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Customer is updating wallet");
    }, 2000);
});
pr
    .then((res) => {
    console.log(res);
    return order;
})
    .then((res) => {
    console.log(res);
    return payment;
})
    .then((res) => {
    console.log(res);
    return summaryPayment;
})
    .then((res) => {
    console.log(res);
    return updateWallet;
})
    .catch((res) => {
    console.log(res);
})
    .finally(() => {
    console.log("Finally Order Complete");
});
export {};
