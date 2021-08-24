

//sortedIndex
console.log(_.sortedIndex([1, 3], 2));
// 
const sortedIndex = (arr, value) => {
    return arr.findIndex((item) => item >= value);
};

//sortedIndexBy

var objects = [{ 'x': 4 }, { 'x': 5 }];

console.log(_.sortedIndexBy(objects, { 'x': 4 }, 'x'));
// 
const sortedIndexBy = (arr, value, func) => {
    const mapArr = arr.map(func).sort((a, b) => a - b);
    return sortedIndex(mapArr, func(value));
};
console.log(sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }));

//sortedIndexOf
console.log(_.sortedIndexOf([4, 5, 5, 5, 6], 5));
// 
const sortedIndexOf = (arr, value) => {
    return arr.indexOf(value);
};
console.log(sortedIndexOf([4, 5, 5, 5, 6], 5));

//sortedLastIndex
console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5));
//
const sortedLastIndex = (arr, value) => {
    return arr.findIndex((item) => item > value);
};
console.log(sortedLastIndex([4, 5, 5, 5, 6], 5));

//sortedLastIndexBy
console.log(_.sortedLastIndexBy(objects, { 'x': 4 }, 'x'));
// 
const sortedLastIndexBy = (arr, value, func) => {
    const mapArr = arr.map(func).sort((a, b) => a - b);
    return sortedIndex(mapArr, func(value));
};
console.log(sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; }));

//sortedLastIndexOf
console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5));
// 
const sortedLastIndexOf = (arr, value) => {
    return arr.lastIndexOf(value);
};
console.log(sortedLastIndexOf([4, 5, 5, 5, 6], 5));
//sortedUniq
console.log(_.sortedUniq([1, 1, 2]));
// 
const sortedUniq = (arr) => {
    return [...new Set(arr)];
};
console.log( sortedUniq([1, 1, 2]));
//sortedUniqBy
console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));
//
const sortedUniqBy = (arr, func) => {
    const mapArr = arr.map(func);
    return [...new Set(mapArr)];
};
console.log(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));