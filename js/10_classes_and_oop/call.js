function SetUsername(username){
    // complex DB call
    this.username = username
}

function createUser(username,email,passowrd){
    SetUsername.call(this,username)

    this.email = email
    this.passowrd = passowrd
}

const abc = new createUser('java' , 'java@gmail.com', 'pass')

console.log(abc);