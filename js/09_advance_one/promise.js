const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  //DB calls, cryptography, network

  setTimeout(() => {
    console.log("Async task is compeleted");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is compeleted 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise consumed");
});

const promisethree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Vivek", email: "test@gmail.com" });
  }, 1000);
});

promisethree.then(function (user) {
  console.log(user);
});

const promisefoure = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Vivek", email: "test@gmail.com" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 1000);
});

promisefoure
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or reject");
  });

const promisefive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JS", pass: "123" });
    } else {
      reject("ERROR:js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const respone = await promisefive;
    console.log(respone);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUser() {
//   try {
//     const respone = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await respone.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUser();

fetch("https://jsonplaceholder.typicode.com/users")
.then((respone)=>{
return respone.json()
})
.then((data) =>{
console.log(data);
})
.catch((error)=> console.log(error));