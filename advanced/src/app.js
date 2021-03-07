let arr = [1, 2, 3, 4, 5, 6];

// function createIterator(collection) {
//   let i = 0;
//   return {
//     next() {
//       return {
//         done: i >= collection.lenght,
//         value: collection[i++],
//       };
//     },
//   };
// }

// let iterate = createIterator(arr);

// let iterate = arr[Symbol.iterator]();

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// console.log(arr[Symbol.iterator]);

// let str = 'texst';

// let ireta = str[Symbol.iterator]();
// console.log(ireta.next());
// console.log(ireta.next());
// console.log(ireta.next());
// console.log(ireta.next());
// console.log(ireta.next());
// console.log(ireta.next());

// for (let v of arr) {
//   console.log(v);
// }

// for (let v of 'Joney taluikdar') {
//   console.log(v);
// }

// let obj = {
//   a: 12,
//   b: 34,
// };

// for (let v of obj) {
//   console.log(v);
// }

let obj = {
  a: 12,
  b: 34,
  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while (currentValue <= this.end) {
      yield currentValue++;
    }
  },
};

let ireta = obj[Symbol.iterator]();
console.log(ireta.next());
console.log(ireta.next());
console.log(ireta.next());
console.log(ireta.next());
console.log(ireta.next());
console.log(ireta.next());
