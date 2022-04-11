// 10-->5--->16
// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    //TODO add new field at the end of linked list
    append(value) {
        //Code here
        /*const newNode = {
            value: value,
            next: null
        };*/
        const newNode = new Node(value);
        /*******/
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    //TODO add new field at the begining of linked list
    prepend(value) {
        /*const newNode = {
            value: value,
            next: this.head
        };*/
        const newNode = new Node(value);
        newNode.next = this.head;
        /*******/
        this.head = newNode;
        this.length++;
        return this;
    }
    //TODO print the linked list values ussing arrray
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    /****
     * 
     *    *---*
     *     \ /
     *      *
        
     */
    insert(index, value) {
        //TODO Check Params
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        if (index == 0) {
            this.prepend(value);
            return this.printList();
        }

        const newNode = new Node(value);
        const leaderNode = this.__traversToIndex(index - 1);
        const holdingPointer = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = holdingPointer;

    }
    __traversToIndex(index) {
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
}

let myLinkedList = new LinkedList(10);
//console.log('01   ', myLinkedList)
myLinkedList.append(5);
//console.log('02   ', myLinkedList)
myLinkedList.append(16);
//console.log('03   ', myLinkedList)
myLinkedList.append(18);
//console.log('04   ', myLinkedList)
myLinkedList.prepend(9);
//console.log('05   ', myLinkedList)

console.log('06 ==>', myLinkedList.printList());
myLinkedList.insert(0, 997);
myLinkedList.insert(2, 998);
myLinkedList.insert(20, 999);
console.log('06 ==>', myLinkedList.printList());