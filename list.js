// ADD:
1) concat()     
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = arr1.concat('f');


2)  Spread Operator
const arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = [...arr1, 'f']; // ['a', 'b', 'c', 'd', 'e', 'f']
const arr3 = ['z', ...arr1]; // ['z', 'a', 'b', 'c', 'd', 'e']


// REMOVE
1) filter()
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = arr1.filter(a => a !== 'e'); // ['a', 'b', 'c', 'd']
// OR
const arr2 = arr1.filter(a => {
  return a !== 'e';
}); // ['a', 'b', 'c', 'd']







