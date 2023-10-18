// const user = {
//   username: "vivek",
//   loginCount: 8,
//   signedIn: true,

//   getUserDetails: function()  {
//      console.log("Got User Detils form datanbase");
//      console.log(`Username: ${this.username}`);
//      console.log(this);
//   },
// };


// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome${this.username}`);
    }
    return this
}

const userOne = new User("Vivek" , 12 , true)
const userTwo = new User("Js" , 12 , false)

console.log(userOne.constructor);
// console.log(userTwo);