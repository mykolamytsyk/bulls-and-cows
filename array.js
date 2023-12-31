const arr = [];

console.log(arr);

const arr1 = [1, 2, '1', '2', null, true, ];

console.log(arr1);

const idx = arr1.length -1 // 5
console.log('idx: ', idx);
console.log(arr1[idx]);

arr1[0] = '!!!'

console.log(arr1[0]);

arr1[0] = arr1[1] + 'number'

console.log(arr1[0]);

arr1[2] += 'number'

console.log(arr1[2]);

arr1.push('new value')
arr1.unshift('####')
console.log(arr1);
delete arr1[2]
console.log(arr1);
console.log(arr1[2]);
function getNewArr(item) {
    return item !== 2
}
const arr2  = arr1.filter(getNewArr)



console.log(arr2);
console.log(arr1);

console.log(arr1.pop());
console.log(arr1.shift());

console.log(arr1);

[1,2,3, [1,2,3]]