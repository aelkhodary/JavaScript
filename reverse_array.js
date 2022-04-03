//create function that reverses a string :
// Hi I am Ahmed
// demhA ma I iH
class ReverseArray {
    constructor() {
        //console.log(this);
    }

    //function reverse(str) {
    reverse(str) {
        // check input
        if (!str || str.length < 2 || typeof str != "string") {
            return 'ThiS is not String';
        }

        const totalLength = str.length - 1;
        const reverseArray = [];

        for (let i = totalLength; i >= 0; i--)
            reverseArray.push(str[i]);
        return reverseArray.join('');

    }
    reverse_2(str) {
        return str.split('').reverse().join('');
        //return str => str.split('').reverse().join('');
    }



}

rev = new ReverseArray();
console.log(rev.reverse('Hi I am Ahmed'));
console.log(rev.reverse_2('Hi I am Ahmed'));

const reverse_3 = str => [...str].reverse().join('');
console.log(reverse_3('Hi I am Ahmed'));

