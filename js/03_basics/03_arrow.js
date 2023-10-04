const user  = {
    userName : "Vivek",
    price : 99,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let userName= "Vivek";
//      console.log(this.userName);
// }

// chai()

const chai1 = () => {
    let username = "vivek"
    console.log(this);
}
// chai1();

// const addTwo  = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>   num1 + num2

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({userName:"vivek"}); // object
// console.log(addTwo(3,4));

const myArray = [1,2,3,4];

// setTimeout(() => {
//   console.log("This is executed after 1 second.");
// }, 5000);


/*****Arrow function in an array map() method:******/
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

/******************Arrow function used in higher-order functions (e.g., filter()):******************/
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 