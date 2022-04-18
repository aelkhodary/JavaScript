class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.array = [];
        this.length = 0;
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        //const newNode = new Node(value);

        this.array.push(value);
        this.length++;
        return this;

    }
    pop() {

        // delete this.array[this.length - 1];
        this.array.pop();
        this.length--;
        return this;
    }
    //isEmpty
}

const myStack = new Stack();
console.log('01 ==>', myStack);
myStack.push('google');
console.log('02 ==>', myStack);
myStack.push('udemy');
console.log('03 ==>', myStack);
myStack.push('discord');
console.log('04 ==>', myStack);
console.log('05 ==>', myStack.peek());
myStack.pop();
console.log('06 ==>', myStack);
myStack.pop();
myStack.pop();
console.log('07 ==>', myStack);