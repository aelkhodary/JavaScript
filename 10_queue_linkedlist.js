class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;

        }
        this.length++;
        return this;

    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
    //isEmpty;
}

const myQueue = new Queue();
console.log('01 ==>', myQueue);
myQueue.enqueue('Joy');
console.log('02 ==>', myQueue);
myQueue.enqueue('Matt');
console.log('03 ==>', myQueue);
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log('04 ==>', myQueue);
myQueue.peek();
myQueue.dequeue();
  //Joy
  //Matt
  //Pavel
  //Samir

