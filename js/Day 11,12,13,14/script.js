// //Task 1 game

// var PlayerOneChoice = "Rock";
// var PlayerTwoChoice = "Scissors";

// if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper") {
//     console.log("Player Two wins!");
// } 
// else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") {
//     console.log("Player One wins!");
// }
// else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") {
//     console.log("Player One wins!");
// }
// else if (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Rock") {
//     console.log("Player Two wins!");
// }
// else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Scissors") {
//     console.log("Player Two wins!");
// }
// else if (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper") {
//     console.log("Player One wins!");
// }
// else if (PlayerOneChoice === PlayerTwoChoice) {
//     console.log("It is a tie!");
// }






// // Task 2
// var grade = 85;         
// var studentName = "Sara"; 
// var isStudent = true;   
// var value = null;        
                   


// if (grade >= 90) {
//     console.log("Excellent");
//  } else if (grade >= 80) {
//     console.log("Good");
//  } else if (grade >= 70) {
//     console.log("Average");
//  } else if (grade >= 60) {
//     console.log("Pass");
//  } else {
//     console.log("Fail");
//  }

 //Activity
//for loop
// for (var i =1; i <= 10 ; i++ ) {
//     console.log(i);
// }

// var i = 1;
// while(i <=10) {
//     console.log(i);
//     i++;
// }

// var i2 = 1;
// do{
//     console.log(i2);
//     i2++

// }while(i2 <= 10)

//Activity
// function getAvg(x,y){
//     console.log((x+y)/2)
// }
// getAvg(20,50);

// var person = {
//     fullName: 'Omar Hassan',
//     age: 27,
//     gender: 'Male',
//     job: 'Doctor',
//     salary: 2500,
//     city: 'Alexandria',
//     isStudent: false,
//     wife: {
//         fullName: 'Mona Ali',
//         age: 25,
//         gender: 'Female',
//         son: {
//             fullName: 'Youssef Omar',
//             age: 4,
//             gender: 'Male'
//         }
//     },
//     eat: function(meal) {
//         console.log(`Eating: ${meal}`);
//     }
// };

// let spaceDiv = document.querySelector('.space');

// let newDivElement = document.createElement('div');


// document.body.appendChild(newDivElement);



// newDivElement.setAttribute('class', 'demo');


// newDivElement.setAttribute('id', 'dom');

// newDivElement.id = 'demo';
// newDivElement.className = 'test';


// let text = document.createTextNode('Hello, This is my first H1');

// newDivElement.appendChild(text);

// document.createTextNode('Hello, This is my first H1').appendChild(text);



//DAY 14
Task - JavaScript (ES6 + Loops + Higher Order Functions)

# Part 1 - Choose

### 1) إيه اللي بيرجعه `map()` ؟

- [ ] أول عنصر يحقق شرط
// - [x] Array جديدة بنفس الطول
- [ ] Boolean
- [ ] Number

---

### 2) مين فيهم بيرجع أول عنصر يحقق الشرط؟

- [ ] filter()
- [ ] map()
// - [x] find()
- [ ] forEach()

---

### 3) `filter()` بيرجع...

- [ ] أول عنصر
// - [x] Array جديدة بالعناصر اللي حققت الشرط
- [ ] Number
- [ ] String

---

### 4) `forEach()` بيرجع...

- [ ] Array جديدة
- [ ] أول عنصر
// - [x] undefined
- [ ] Boolean

---

### 5) `for...of` بنستخدمها غالباً مع...

- [ ] Objects
// - [x] Arrays
- [ ] Functions
- [ ] Classes

---

# Part 2 - True or False

// 1. `map()` بيغير الـ Array الأصلية. [F]
// 2. `filter()` ممكن يرجع Array فاضية. [T]
// 3. `find()` ممكن يرجع undefined. [T]
// 4. `for...in` بيلف على الـ Index بتاع الـ Array.[T]
// 5. `forEach()` ينفع أعمل بيها break.[F]

---

# Part 3 - Compelete the following

## Q1

خلي الكود يطبع:

```
2
4
6
8
```

```js
const numbers = [1,2,3,4];

 numbers.__FOREACH___((num)=>{
    console.log(num * 2);
});
```

---

## Q2

طلع Array فيها الأرقام الأكبر من 20.

```js
const nums = [10,25,5,30,15,40];

const result = nums.__ filter______((num)=>{
    return num > 20;
});

console.log(result); 
```
// [25,30,40]
---

## Q3

هات أول شخص عمره أكبر من 25.

```js
const users = [
    {name:"Ali", age:20},
    {name:"Sara", age:28},
    {name:"Omar", age:30}
];

const user = users.____find____((item)=>{
    return item.age > 25;
});

console.log(user); 
```
// {name: "sara", age:28}
---

## Q4

حوّل كل الأسماء لـ Uppercase.

```js
const names = ["ali","mona","ahmed"];

const result = names.___map_____((name)=>{
    return name.toUpperCase();
});

console.log(result);
```
// ["ALI","MONA""AHMED"]
---

# Part 4 - To Do

## عندك الـ Array دي

```js
const fruits = ["Apple","Banana","Orange"];
```

### 1)

اطبع كل عنصر باستخدام `for...of`
// for (const fruit of fruits) {
//     console.log(fruit);
// }
---

### 2)

اطبع الـ Index باستخدام `for...in`

// for(const index in fruits) {
//     console.log(index);
// }
// 0
// 1
// 2
---

### 3)

اطبع بالشكل ده باستخدام `forEach`

```
0 -> Apple
1 -> Banana
2 -> Orange
```
// fruits.forEach((fruit,index)=>{
//     console.log('${index} ->${fruit}');
// });

---

# Part 5 - To Do

## Q1

حوّل الكود لـ Arrow Function

```js
function sum(a,b){
    return a+b;
}
```
// const sum = (a,b) => {
//     return a+b;
// };

---

## Q2

استخدم Destructuring

```js
const user = {
    name:"Mostafa",
    age:25
};
```

خد `name` و `age` في متغيرات.

// const user ={
//     name:"Mostafa"
//     age:25
// };
// const {name, age} =user;
// console.log(Name);
// console.log(age)
---

## Q3

استخدم Template Literal

بدل

```js
 console.log("Hello " + name);
 ```
// console.log('Hello ${name}');
---

## Q4

استخدم Spread Operator

```js
const arr1 = [1,2,3];
const arr2 = [4,5,6];
```

اعمل Array واحدة فيها الكل.

// const arr1 =[1,2,3];
// const arr2 =[4,5,6];
// const result =[arr1,arr2];
// console.log(result);
// [1,2,3,4,5,6]
---

# Part 6 - Many Q

عندك البيانات دي:

```js
const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];
```

## Required

### 1)

اعمل Array فيها أسماء الطلبة بس.
//  const names = students.map((student) => {
//     return student.name;
//  });
//  console.log(names);

//  ["Ali","Sara","Ahmed","Mona","Omar"]
---

### 2)

اعمل Array فيها الطلبة اللي درجاتهم أكبر من أو تساوي 60.

// [
//     { name: "Ali", degree: 70 },
//     { name: "Sara", degree: 95 },
//     { name: "Mona", degree: 85 },
//     { name: "Omar", degree: 55 }
// ]

// [
//     { name: "Ali", degree: 70 },
//     { name: "Sara", degree: 95 },
//     { name: "Mona", degree: 85 }
// ]

---

### 3)

هات أول طالب درجته أكبر من 90.

// const student = students.find((student) => {
//     return student.degree > 90;
// });

// console.log(student);

// {name: "Sara", degree: 95}

---

### 4)

اطبع أسماء كل الطلبة باستخدام `forEach()`.

// students.forEach((student) => {
//     console.log(student.name);
// });

Ali
Sara
Ahmed
Mona
Omar

---

# Bonus

بدون استخدام Loop عادية (`for` أو `while`)

احسب مجموع الأرقام دي باستخدام `reduce()` لو فاكرها أو دور عليها في الـ MDN 
```js
// const numbers = [5,10,15,20];
// const sum =numbers.reduce((total, num) =>{
//     return total +num;
//     }, 0);
// cosole.log(sum);

الناتج
// 50
```

