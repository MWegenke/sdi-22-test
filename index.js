// console.log('first')

// let fname = "Corey"
// let lname = "Willains"
// let name = fname +"johnas"+ lname
// console.log(name)


// let myArray = ['Corey', "Tev", "Braden"]
// // console.log(myArray.length)

// for(let i = 0; i < myArray.length; i++){
//   console.log(myArray[i])
// }

// let tempNum = 5
// tempNum += 7
// console.log(tempNum)


//Truthy and Falsy
// if(!undefined && !null){
//   console.log("true")
// }


// let tempNum = 5

// console.log(tempNum++)
// console.log(tempNum)

// let tempNum = 10

// console.log(10 % 3)

// console.log(!false)

// let temp = true

// if(!temp){
//   console.log("Fist layer")
//   if(!temp){
//     console.log("Second layer")
//     if(!temp){
//       console.log("Third layer")
//     }
//   }  
// }

// let cat = ['Furry', "Diva", "Entitled"]
// console.log(cat[1])

// let dog = {name: "Chance", breed: "German shepherd", weight: 100};

// console.log(dog.name)

// let arryMatrix =[[[1,2],3],[[4,5],6],[[7,8],9]]

// console.log(arryMatrix[0][0][1])

// const temp = 5

// console.log(temp)

// temp = 7

// console.log(temp)

// function name() {
//   console.log("win")
// }

// let names = () => console.log("woot")


// name()
// names()

//--------------------Fundamentals II--------------------

// let number
// let valid = false;

// if(valid){
//   number = 1
// }else{
//   number = 2
// }
// console.log("basic if ",number)

// let number2 = (1 > 0) ? 1 : 0;
// console.log("ternary ",number2)


// function getSummary(arg){
//   console.log(arg)
// }
// getSummary("Super Sweet")
// getSummary(5)
// getSummary(true)
// getSummary()

// let lotto = [
// 	{name: "John", numbers: [6, 5, 3, 11, 34]},
// 	{name: "Steve", numbers: [9, 15, 13, 21, 14]}
// ]

// arr = lotto

// const getNums = (arr) => {
//   let allNums = [];
// 	arr = [
//     {name: "John", numbers: [6, 5, 3, 11, 34]},
//     {name: "Steve", numbers: [9, 15, 13, 21, 14]}
//   ]

//   for(let elm of arr){
//     elm = {name: "Steve", numbers: [9, 15, 13, 21, 14]} 
//     for(let num of elm.numbers){
//       num = [9, 15, 13, 21, 14]
//       allNums.push(num)
//     }
//   }
	
//   return allNums;
// }

// getNums(lotto);

// let dude  = {name: "John", numbers: [6, 5, 3, 11, 34]};

// for(let temp in dude){
//   console.log(dude[temp])
// }

// let globallyAccessable = 100;

// const randomFunction = () => {
//   console.log(globallyAccessable)

//   var newVar = 0;
//   if(2 == 2){
//     console.log(globallyAccessable)
//     var newVar;
//   }
//   return newVar;

// }

// if(true){
//   var temp = 7;
// }
// console.log("first clg ", temp)
// console.log(randomFunction())

// for (let i = 0; i < 5; i++){
//   let newVar = i
//   console.log(newVar)
//   return true
// }

//Arrays and Objects

//Control Flow
//if Statement
// let username = "Billy";
// let password = 66;

// if(username === "Billy"/* true */){
//   console.log("Correct Username")
//   if(password !== "password"){
//     console.log("Correct Password")
//   }
// }else{
//   console.log("Login Failed")
// }
//Loops (For, While, Do While)

// let tempArray = ["Matt", "Charles", "Corey", "Tev"];

// for(let i =0; i < tempArray.length; i++){
//   console.log(tempArray[i])
// }

// for(let arr of tempArray){
//   console.log(arr)
// }

// for(let arr in tempArray){
//   console.log(arr)
// }

// let person = {name:"Dude", age:56, drink:"White Russian"}

// for(let key in person){
//   console.log("key ",key)
//   console.log("value ",person[key])
// }

//Switch Statement

// const season = 'Fall';

// switch (season) {
//   case 'Summer':
//     console.log(`The season is ${season}`);
//     break;
//   case 'Fall':
//   	console.log(`The season is ${season}`);
//     break;
//   case 'Winter':
//     console.log(`The season is ${season}`);
//     break;
//   case 'Spring':
//     console.log(`The season is ${season}`);
//     break;  
//   default:
//     console.log(`Sorry, ${season} is not a season.`);
// }

// if(season === 'Summer'){
//   console.log(`The season is ${season}`);
// }else if(season === 'Fall'){
//   console.log(`The season is ${season}`);
// }else if(season === 'Spring'){
//   console.log(`The season is ${season}`);
// }else if(season === 'Winter'){
//   console.log(`The season is ${season}`);
// }else {
//   console.log(`Sorry, ${season} is not a season.`);
// }



// Functions

//indexes > 0,1,2,3,4,
// let arr1 = [[1,2],[3,4,5]]

// for(let i = 0; i < arr1.length; i++ ){
//   for(let j = 0; j < arr1[i].length; j++){
//     console.log(arr1[i])
//     console.log(arr1[i][j])
//   }
// }



// let temp = [1,2,3,4,5]

// let doubled = temp.map((x) => x *2 )


// console.log(temp.map(function (3) {
//   return 3 * 2;
// })) => [2,4,6]




// console.log(temp.map((x) => x *2 ))
// console.log(temp)


// HOF Chaining. (find, filter, reduce, map)

// let garbage = [1,'h',4,6,null,'SDI22',56, 1137,'', true, 132]

// let bestEver = garbage.filter(elm => typeof elm === 'string' && elm.charAt(0) === "S")

// console.log(bestEver)

// let total = garbage.filter(elm => typeof elm === 'number') // => [ 1, 4, 6, 56, 1137, 132 ]
// .reduce((x, y) => x + y)

// console.log(total)

// let newTotal = garbage.filter(elm => typeof elm === 'number').map(element => element * 5)
// console.log(newTotal)
// console.log(garbage.map(x => console.log(x))) //returns array of undefined.


//Fundamentals III Workshop
// function stringify(param){
//   return `Here is my param ${params}`
// }


// function funTimes(params) {
//   let outPut =  stringify(params)
//   let id = 1
//   let list = document.getElementById('todo-list')

//   return [outPut, id, list]
// }