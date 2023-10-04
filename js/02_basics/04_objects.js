// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Jona";
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"hina@gmail.com",
    fullname:{
        userfullname : {
            firstname:"jona",
            lastname:"will"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3: "c", 4: "d" };

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const usres = [
  { id: 1, name: "demo",},
  { id: 2, name: "demo",},
  { id: 3, name: "demo",},
];

usres[1].name
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "test",
};

// course.courseInstructor

const {courseInstructor:instructor} = course;
console.log(instructor);

// {
//     "name": "vivek",
//     "coursename": "js in hindi",
//     "price": "free"
// }