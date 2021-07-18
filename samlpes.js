/**
 * Purpose:
 * will cover the following topices:
 * this, call/bind/apply
 */

// this:

function a() {
  console.log(this);
  this.newVariable = 'hello' // possible ?? => yes, Good practice ?? => NO!!
}
a();

const obj = {};
obj.name = "Avi";
console.log(obj);

console.log(newVariable);
