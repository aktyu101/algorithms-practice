//선형탐사
function HashTable(size) {
  this.size = size;
  this.keys = Array(size).fill(null);
  this.values = Array(size).fill(null);
  this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table is full";
  if (this.keys.includes(key)) {
    throw "duplicated key";
  }
  let hashedIndex = this.hash(key);
  //선형탐사
  while (this.keys[hashedIndex] != null) {
    hashedIndex++;
    hashedIndex = this.hash(hashedIndex);
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw "must be int";
  return key % this.size;
};

HashTable.prototype.get = function (key) {
  let hashedIndex = this.hash(key);

  while (this.keys[hashedIndex] !== key) {
    hashedIndex++;
    hashedIndex = this.hash(hashedIndex);
    //hashedIndex = hashedIndex % this.size;
  }
  return this.values[hashedIndex];
};

const exampletable = new HashTable(13);
exampletable.put(7, "a");
exampletable.put(20, "d");
exampletable.put(33, "e");
exampletable.put(1, "c");
exampletable.put(0, "r");

console.log(exampletable.get(20));
//getAll

// HashTable.prototype.initArray = function (size) {
//   const array = [];
//   for (let i = 0; i < size; i++) {
//     array.push(null);
//   }
//   return array;
// };
//console.log(Array(13).fill(null));

//console.log([...Array(13)].map((v) => 1));
//console.log(39 % 13);
