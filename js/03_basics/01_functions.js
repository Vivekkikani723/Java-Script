function sayMyName() {
  console.log("v");
  console.log("I");
  console.log("v");
  console.log("E");
  console.log("k");
}

// sayMyName();

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

function addTwoNumber2(number1, number2) {
  //   let result = number1 + number2
  //   return result;
  return number1 + number2;
}

const result = addTwoNumber2(5, 5);

// console.log("Result:",result);

function loginUserMessage(userName = "Demo") {
  if (userName === undefined) {
    console.log("please enter a username");
    return;
  }
  return `${userName} Just logged in`;
}

// console.log(loginUserMessage("vivek"))
console.log(loginUserMessage());

function calculatecartPrice(...num1) {
  return num1;
}

// console.log(calculatecartPrice(500, 500, 522,200));

const user = {
  userName: "vivek",
  price: 1999,
};

function handleObject(anyObject) {
  console.log(
    `userName is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

// handleObject(user)
handleObject({
  userName: "jon",
  price: 1999,
});

const myNewArray = [522,200,55]

function returnSecondValue(getArray){
return getArray[2];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([522, 200, 55]));