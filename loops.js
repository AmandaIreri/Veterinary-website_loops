//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

const operations = (numbers) =>{
    let firstFour = numbers.slice(0,4).map(item => item * item);
    let lastTwo = numbers.slice(-2).map(item => item + 10);
    let middle = numbers.slice(4,-2);

    const newNumbers = firstFour.concat(middle).concat(lastTwo);
    console.log(newNumbers);
}
operations([2,3,4,5,6,7,8,9,10]);


//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
function myArray(numbers){
    let arrNum = [1,2,3,4,5,6,7,8,9];

    while(arrNum.length > 4){
        console.log(numbers);
        arrNum.pop()
    if(arrNum.length===2){
        console.log(arrNum);
        break;
    }}
    return arrNum
}
console.log(myArray());

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
const items =(numbers) =>{
    // let values= [10, 20, 30, 40, 50, 60, 70]
   for(let i =0;i<numbers.length;i++){
    if(i === 1){
        continue;
    };
    console.log(numbers[1])
   };
};
items([10, 20, 30, 40, 50, 60, 70])


//Write a function that accepts an array of strings and console.logs each element using a for loop.

const AllElements = (string) =>{
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
 }
 let name = ["Ireri","Faith","Amanda","Joy","Gloria"];
 AllElements(name);





//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 

const reverseString =(string) =>{
    let newArray = ''
    let i = string.length - 1;
   while(i--){
    newArray=string[i];
    i--;
   }
}
   console.log(reverseString('Glory','Joy','Mutava','Nduta'));
