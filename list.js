// ########################## ADD #####################
1) concat()     
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = arr1.concat('f');


2)  Spread Operator
const arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = [...arr1, 'f']; // ['a', 'b', 'c', 'd', 'e', 'f']
const arr3 = ['z', ...arr1]; // ['z', 'a', 'b', 'c', 'd', 'e']


// ########################## REMOVE #####################
1) filter()
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = arr1.filter(a => a !== 'e'); // ['a', 'b', 'c', 'd']
// OR
const arr2 = arr1.filter(a => {
  return a !== 'e';
}); // ['a', 'b', 'c', 'd']


2) slice() takes two parameters.
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = arr1.slice(1, 5) // ['b', 'c', 'd', 'e']
const arr3 = arr1.slice(2) // ['c', 'd', 'e']


// ########################## REPLACE #####################
// since we will not be mutating, 
// use const
1) map() 
const arr1 = ['a', 'b', 'c', 'd', 'e']
const arr2 = arr1.map(item => {
  if(item === 'c') {
    item = 'CAT';
  }
  return item;
}); // ['a', 'b', 'CAT', 'd', 'e']


// ######################### Transforming Data with array.map() ##################
// since we will not be mutating, 
// use const
const origArr = ['a', 'b', 'c', 'd', 'e'];
const transformedArr = origArr.map(n => n + 'Hi!'); // ['aHi!', 'bHi!', 'cHi!', 'dHi!', 'eHi!']
// OR
const transformedArr = origArr.map(n => {
  return n * 2;
})// ['aHi!', 'bHi!', 'cHi!', 'dHi!', 'eHi!']
console.log(origArr); // ['a', 'b', 'c', 'd', 'e']; // orignal array is intact

















