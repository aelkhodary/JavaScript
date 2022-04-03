//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


//function firstRecurringCharacter(input) {}


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2


class FirstRecurringCharacter {

    constructor() {
    }
    firstRecurringCharacter_01(input) {
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                //console.log(input[i]);
                //console.log(input[j]);
                if (input[i] === input[j]) {
                    return input[i];
                }
            }

        }

        return undefined;

    }//O(n^2)


    firstRecurringCharacter_02(input) {
        let map = {};
        for (let i = 0; i < input.length; i++) {
            console.log("-->" + input[i] + "-----" + map[input[i]]);
            if (map[input[i]] !== undefined) {
                return input[i];
            } else {
                map[input[i]] = i;
            }

        }
        console.log(map);
        return undefined;

    }

}

const firstRec = new FirstRecurringCharacter();
let input = [2, 5, 1, 2, 3, 5, 1, 2, 4, 3];
//console.log(firstRec.firstRecurringCharacter_01(input));
console.log(firstRec.firstRecurringCharacter_02(input));