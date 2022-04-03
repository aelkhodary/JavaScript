/*
chaining in hash tables
Chaining is a technique used for avoiding collisions in hash tables.

A collision occurs when two keys are hashed to the same index in a hash table.

Collisions are a problem because every 
slot in a hash table is supposed to store a single element.
*/

class MyHashTable {

    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            //console.log(hash);
        }
        return hash
    }

    set(key, value) {

        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value])
        //console.log(this.data);

    }
    get(key) {
        let address = this._hash(key);
        let currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    let value = currentBucket[i][1];
                    return value;
                }
            }
        }
        return undefined;
    }
    keys() {
        /*
        [[ [ 'Ali', 5000 ] ],
        [ [ 'Arwa', 1000 ], [ 'Alaa', 2000 ], [ 'Ahmed', 2000 ] ]]
        */
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    //console.log(this.data[i][j][0]);
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }
        return keysArray;
    }

    values() {
        /*
        [[ [ 'Ali', 5000 ] ],
        [ [ 'Arwa', 1000 ], [ 'Alaa', 2000 ], [ 'Ahmed', 2000 ] ]]
        */
        const valuesArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    //console.log(this.data[i][j][1]);
                    valuesArray.push(this.data[i][j][1]);
                }
            }
        }
        return valuesArray;
    }
}

const myHashTable = new MyHashTable(2);
myHashTable.set('Arwa', 1000);
console.log('--------------');
myHashTable.set('Ali', 5000);
console.log('--------------');
myHashTable.set('Alaa', 2000);
console.log('--------------');
myHashTable.set('Ahmed', 2000);
// colusion conncept
console.log(myHashTable.get('Ahmed'));
console.log('keys : ' + myHashTable.keys());
console.log('values : ' + myHashTable.values());




/*
keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          }
        }
    }
    return result;
  }
*/