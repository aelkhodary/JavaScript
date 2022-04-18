class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const tempNode = this.top;
            this.top = newNode;
            this.top.next = tempNode;
        }
        this.length++;
        return this;

    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const tempNode = this.top;
        this.top = tempNode.next;
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
myStack.pop();
myStack.pop();
console.log('06 ==>', myStack);