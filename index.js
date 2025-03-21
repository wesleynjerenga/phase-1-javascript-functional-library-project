// index.js

function myEach(collection, callback) {
  for (let key in collection) {
    callback(collection[key]);
  }
  return collection;
}

function myMap(collection, callback) {
  let result = [];
  for (let key in collection) {
    result.push(callback(collection[key]));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let keys = Object.keys(collection);
  let startIndex = 0;
  if (acc === undefined) {
    acc = collection[keys[0]];
    startIndex = 1;
  }
  for (let i = startIndex; i < keys.length; i++) {
    acc = callback(acc, collection[keys[i]]);
  }
  return acc;
}

function myFind(collection, predicate) {
  for (let key in collection) {
    if (predicate(collection[key])) {
      return collection[key];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let result = [];
  for (let key in collection) {
    if (predicate(collection[key])) {
      result.push(collection[key]);
    }
  }
  return result;
}

function mySize(collection) {
  return Object.keys(collection).length;
}

function myFirst(collection, n) {
  if (n === undefined) {
    return collection[0];
  }
  return collection.slice(0, n);
}

function myLast(collection, n) {
  if (n === undefined) {
    return collection[collection.length - 1];
  }
  return collection.slice(-n);
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues
};