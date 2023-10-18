// ES6

// class User {
//     constructor(username,emali,password){
//         this.username = username;
//         this.emali = emali;
//         this.password = password;
//     }

//     encryptPassowrd(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const js = new User("vivek", "java@gmail.com", "123");
// console.log(js.encryptPassowrd());
// console.log(js.changeUsername());

// behind the scene

function User(username,emali,password){
    this.username = username;
    this.emali = emali;
    this.password = password;
}

User.prototype.encryptPassowrd = function(){
    return `${this.password}abc`;
}
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const java = new User("vivek", "java@gmail.com", "123");
console.log(java.encryptPassowrd());
console.log(java.changeUsername());
