/*Array statistics
You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }*/

function arrayStats(array){
    var sum=0;
for(var i=0;i<array.length;i++){
         sum+=array[i];
}
    var valStats ={
        sum:function () {
            return sum; 
        },
        average: sum/array.length,
        min:Math.min(...array),
        max:Math.max(...array)
    }
        return "sum: "+valStats.sum()+" ,average: "+valStats.average+" ,min: "+valStats.min+" ,max: "+valStats.max;
}
arrayStats([1,2,3,4]);