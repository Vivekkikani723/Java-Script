let data = new Date()

// console.log(data.toString());
// console.log(data.toDateString());
// console.log(data.toISOString());
// console.log(data.toJSON());
// console.log(data.toLocaleTimeString());
// console.log(data.toLocaleDateString());
// console.log(data.toLocaleString());


// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleTimeString());

let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getUTCDay());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getMonth());


newDate.toLocaleString("default", {
  weekday: "long",
});
