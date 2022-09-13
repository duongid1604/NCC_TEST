const array1= [1, 3, 4, 2, 7, 9, 10, 6, 8]
const array2 = [1, 3, 9, 11, 5, 7, 13]

const result = array1.filter(element => array2.includes(element));

console.log(result);