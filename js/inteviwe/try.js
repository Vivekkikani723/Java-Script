// Q Display the original properties of an array.

Array.prototype.extraProperty = "vivek"

const myArray = [1,2,3,4]

for (let v in myArray) {
    if (myArray.hasOwnProperty(v)) {
      console.log(v);
    }
    
}



// Array.prototype.customForEachOne = function(callback){
//   for(let i = 0; i<this.length; i++){
//     callback(this[i] , i, this)
//   }
// }

Array.prototype.customForEachTwo = function(callback,thiscontext){
  if (typeof callback != 'function') {
    throw `Not fuction`
  }
  const length = this.length
  let i = 0;
  while (i < length) {
    if (this.hasOwnProperty) {
      callback.call(thiscontext, this[i], i, this)
    }
    i++
  }
}