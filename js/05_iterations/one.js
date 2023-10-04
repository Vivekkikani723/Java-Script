/******************FOR LOOP******************/

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10 ; i++) {
    // console.log(`outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop value ${i}`);
        // console.log( i + '*' + j + ' = ' + i * j);
        
    }
    
}

let array = ["flashe", "batman" ,"superman"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    
}

/************************Break************************/

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value is i is ${index}`);
// }



/************************Continue************************/
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value is i is ${index}`);
}