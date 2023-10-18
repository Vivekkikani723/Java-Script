// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vivek = function (){
    // console.log(`vivek is presnet in all objects`);
}


Array.prototype.heyVivek = function (){
    // console.log(`Vivek says Hello`);
}

// heroPower.vivek()
// myHeros.vivek()
// myHeros.heyVivek()
// heroPower.heyVivek()


const User = {
  name: "JS",
  email: "JS@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__= User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "vivek     "
String.prototype.trueLength = function(){
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"vivek".trueLength()
"java".trueLength()