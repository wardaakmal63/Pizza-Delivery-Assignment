// task : 2

"use strict";

const reDefine = async () => {
    setTimeout(() => {
        console.log("Pizza delivery requested");
    }, 2000);
};

const order = async () => {
    setTimeout(() => {
        console.log("Pizza is ordered");
    }, 2000);
};

const payment = async () => {
    setTimeout(() => {
        console.log("Checking the payment");
    }, 2000);
};

const summaryPayment = async () => {
    setTimeout(() => {
        console.log("Customer is reviewing the payment");
    }, 2000);
};

const updateWallet = async () => {
    setTimeout(() => {
        console.log("Customer is updating wallet");
    }, 2000);
};


const pizzadelivery = async () => {
    try {
        
        await reDefine();
        await order();
        await payment();
        await summaryPayment();
        await updateWallet();
    } catch (error) {
        console.log("Error:", error);
    } finally {
        
        setTimeout(() => {
            console.log("Finally");
        }, 5000);
    }
};


pizzadelivery();
