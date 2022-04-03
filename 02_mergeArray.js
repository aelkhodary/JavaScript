class MergeArray {
    // merge Sorted Arrays
    mergeSortedArrays(array1, array2) {

        const mergedArray = [];
        if (array1.length === 0)
            return array2;
        if (array2.length === 0)
            return array1;

        let i = 0;
        let j = 0;
        let array1Item = array1[i];
        let array2Item = array2[j];

        while (array1Item || array2Item) {

            if (!array2Item || array1Item < array2Item) {

                mergedArray.push(array1Item);
                i++;
                array1Item = array1[i]

            } else {
                mergedArray.push(array2Item);
                // console.log(array2Item);
                j++;
                array2Item = array2[j]
            }

        }
        return mergedArray;
    }
}

merge = new MergeArray();

const mergedArray = merge.mergeSortedArrays([2, 3, 4, 31], [1, 6, 30, 35, 40, 58]);
console.log(mergedArray);