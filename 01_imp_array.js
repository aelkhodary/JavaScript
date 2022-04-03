class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
        //console.log(this);
    }

    get(index) {
        console.log(this);
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {

        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        //console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];

        this.length--;
    }
}

const myArray = new MyArray();
myArray.push('Ahmed');
myArray.push('Alaa');
myArray.push('Arwa');
myArray.push(600);
console.log('Bfore pop ');
console.log(myArray);
//console.log(myArray.get(0));
myArray.pop();
console.log('After pop ')
console.log(myArray);
myArray.push(600);
console.log('Before deleteAtIndex ');
console.log(myArray);
myArray.deleteAtIndex(0);
console.log('After deleteAtIndex ');
console.log(myArray);

//ConnectionRetryCount=1;ConnectionRetryDelay=1200;