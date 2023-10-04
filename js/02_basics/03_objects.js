// singleton

// object literals

const mySym = Symbol("key1");


const jsuser = {
  name: "Jon",
  "full name": "Jon SS",
  [mySym]: "mykey1",
  age: "20",
  location: "surat",
  email: "demo@gmail.com",
  isLoggedIn: false,
  lastLogindays: ["Monday", "Saturday"],
};
// console.log(jsuser.email);
// console.log(jsuser['email']);

// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

// jsuser.email = 'test@gmail.com';
// Object.freeze(jsuser)
// jsuser.email = "hello@gmail.com";
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js ");
}

jsuser.greeting2 = function () {
  console.log(`Hello js user,${this.name}`);
};

console.log(jsuser.greeting());
console.log(jsuser.greeting2());