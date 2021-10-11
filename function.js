/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(pNmae, gLocation, jobTitle, nOc ){

console.log ("you will be married to "+ pNmae + " live in " + gLocation + " will work as a "+ jobTitle +
" and have "+ nOc + " children");
}

tellFortune("mike", "amman", "gamer", 3);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(pAge){
  console.log(" your dogs age is "+ pAge * 7);
}
calculateDogAge(10);
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// ??????????????????????????????????????????
// ?????????????????????
// ????????????
// ???????????
const age = 100; 
function calculateSupply (age, aPd){
  console.log( " you will need "+ aPd + " hugs in life to last you till the age of "+ age );
}
calculateSupply(age , 120);
// ??????????????????????????????????????????
// // ?????????????????????
// // ????????????
// // ???????????
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(name){
  console.log("hello " + name);
}
greet("mike");
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

function double(cat) {
  return 2 * x;
}

function double(cat) {
  return 2 * 7;
}

function double(cat) {
  return 2 * 'x';
}

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

function double1(x) {
  return 2 * x ;
}

function double2(x){
return 2 * x;
}

function  double3(x) {
  return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x){
console.log("the cube of " + x + " is " + x**3 )
}
cube(4)

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(a,b){
console.log("the multipplication of "+a + " and "+b+ " is " + a*b )
}

multiply(2,5);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
  
  if ( age >= 20 ){
    console.log(" yes you can" + age);
  }
  else{
    console.log(" please come back after " + (20-age));
  }
}

canIGetADrivingLicense(15);


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(one, two){
 if(one.length == two.length){
    console.log("true");
 }
 else{console.log("flase");}

}
sameLength("theeee", "sameee")


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(first, second){
  if(first > second){
    console.log(first);
  }
  else {
      console.log(second);
  }
}
   largerNubmer(25, 18);


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3
*/
function smallerNubmer(A, B, C){
  if(A < B && A < C){
    console.log(A);
  }
  else if(B < A && B < C){
    console.log(B);
  }else{
    console.log(C);
  }
}
smallerNubmer(25, 9, 10);




/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(ono, douce, trais, quatro, cinco){
  string1 = ono.length;
  string2 = douce.length;
  string3 = trais.length;
  string4 = quatro.length;
  string5 = cinco.length;
  if(string1 < string2 && string1 < string3 && string1 < string4 && string1 < string5){
    console.log(ono);
  }
  else if(string2 < string1 && string2 < string3 && string2 <  string4 && string2 < string5){
    console.log(douce);
  }
  else if(string3 < string1 && string3 < string2 && string3 < string4 && string3 < string5){
    console.log(trais);
  }
  else if(string4 < string1 && string4 < string3 && string4 < string3 && string4 < string5){
    console.log(quatro);
  }
  else{
    console.log(cinco);
  }
}

shorterString ("me", "you", "myself", "and", "I");




/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(sun1, sun2, sun3, sun4){
  ring1 = sun1.length;
  ring2 = sun2.length;
  ring3 = sun3.length;
  ring4 = sun4.length;
  if(ring1 > ring2 && ring1 > ring3 && ring1 > ring4 ){
    console.log(sun1);
  }
  else if(ring2 > string1 && ring2 > ring3 && ring2 >  ring4){
    console.log(sun2);
  }
  else if(ring3 > ring1 && ring3 > ring2 && ring3 > ring4){
    console.log(sun3);
  }
  else{
    console.log(sun4);
  }
}

longerString ("underwater", "you", "myself", "and", "I");





/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(myNumer){
    if (myNumer % 2 == 0){
      console.log(myNumer+ " is even")
    }
    else{
      console.log(myNumer + " is odd")
    }
}

  isEven (13);


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/


function isEven(myNumer){
  if (myNumer % 2 == 1){
    console.log(myNumer+ " is odd")
  }
  else{
    console.log(myNumer + " is even")
  }
}

isEven (13);



/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(myNumber){
    if (myNumber < 0){
       console.log( myNumber = myNumber * -1);
    }else{
      console.log(myNumber);
    }
}

positive(-24);



/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName, lastName){

    console.log(firstName + " " + lastName)

}
fullName("Ahmad", "Kilani");


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function avg(num1, num2, num3, num4, num5){
   var sum = num1 + num2 + num3 + num4 + num5;
    console.log( avg = sum / 5);
}

avg(12, 10, 33, 4, 8);


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber(){
  console.log(Math.random());
}
randomNumber();


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
// ????????????????????????????????????????????????????????????
function randomBetweenNumbers(rand1, rand2){
  console.log(Math.floor(Math.random()*(rand2-rand1+1))+rand1);
}

randomBetweenNumbers(12, 5);
// ??????????????????????????????????????????????????????????????????



/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/


function scoreInUniversty(score){
  if(score >= 95 && score <= 100){

    console.log("your score is A");
  }
  else if(score >= 85 && score <= 94){
    console.log("your score is B");
}
else if(score >= 70 && score <= 84){
  console.log("your score is C");
}

  else if(score >= 50 && score <= 69){
      console.log("your score is D");
  }
  else if(score >= 0 && score <= 49){
    console.log("your score is F");
}
}
scoreInUniversty(89);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

// number = number+1
let i = 0; 

function counter(){
  i++;
  console.log(i);
}

counter();
counter();
counter();


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


function resetCounter(){
  console.log("this is the reset " + i);
  i=0; 
}

resetCounter();
counter();
resetCounter();
counter();
counter();