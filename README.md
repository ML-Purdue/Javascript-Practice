# Javascript-Practice
Intended for Purdue SIGART 2015 to use to practice Javascript stuff.
Below are problems, and you can work them out in your respective branches.

## Working with Git
Run the following command to get the repository onto your machine:
```
git clone <url>
```
where <url> is the clone URL. You should see this on the project page on the right hand side.
Once you clone the repository, you should make your own branch:
```
git checkout -b <Your Name>
```
This will allow you to work on and publish your own solutions to these exercises while allowing others to work on them as well.
Once you are done, type the following to commit:
```
git add .
git commit -m "Implemented Problems"
git push origin <Your Branch>
```
You should now see your solutions appear under your branch on github.

*Please do not publish your solutions to the master branch. AKA do not run "git push origin master"*

## Problem 1: Concatenating Strings
Write a function "concatenate" that takes an array of strings as a parameter, and return a string of all elements concatenated to eachother.
Each should be seperated by a space, but no space should appear on either end of the string.
Example Usage:
```
concatenate(["Hello", "World", "This", "Is", "SIGART"]); // Should return "Hello World This Is Sigart"
```
## Problem 2: Fizz Bizz
Write a function "fizzBizz" takes a number as a param and that returns a string of that number. However, if that number is divisible by 3, return "Fizz", or if it's divizible by 5, return "Bizz". If it's divizible by both, return "FizzBizz".
Examples:
```
fizzBizz(7); // prints "7"
fizzBizz(9); // prints "Fizz"
fizzBizz(10); // prints "Bizz"
fizzBizz(15); // prints "FizzBizz"
```
## Problem 3: Fibonacci
Write a function "fib" that takes a number 'n' as a param and returns the nth fibonacci number. Note that fib(n) is defined as follows:
```
fib(0) = 1;
fib(1) = 1;
fib(n) = fib(n-1) + fib(n-2);
```
HINT: I highly recommend you implement this recurrsively. You may also assume you are working with an integer greater than or equal to 0.
Examples:
```
fib(0); // returns 1
fib(2); // returns 2
fib(5); // returns 8
```
## Problem 4: Palindrome
Write a function "isPalindrome" that takes an integer 'n' as a param and returns true/false depending on if it is a palindrome or not. Note that an integer is a palindrome if and only if it reads the same both ways. For example:

404 is a palindrome

6021 is not a palindrome because 6021 != 1206

63436 is a palindrome
## Problem 5: Student Object
Write a function "student" that takes parameters:
* "name" (a string)
* "gradeLevel" (stored as an integer for 1 = freshman, 2 = sophomore, 3 = junior, and 4 = senior)
* "gpa" stored as a float, representing the cumulative GPA
* "creditHours" stored as an integer
The function should return an object containing the properties of the parameters. Additionally, the object should have a method (addSemesterGPA) that takes two params:
* "semesterGPA" stored as a float
* "creditHours" stored as an integer, signifying the number of credit hours taken that semester.
The method should update the creditHours and gpa fields of the object.  Note that a new GPA is calcualted by:
```
New GPA = (oldGPA * oldCreditHours + semesterGPA * semesterCreditHours) / totalCreditHours
```
Note that the above is pseudocode and should be refactored to fit the proper variable names.
## (OPTIONAL) Problem 6: Big Integer
The largest integer that can be stored in JavaScript is 9007199254740991 (slightly over 9 quadrillion). There are situations when one might need to use a larger number. You should implement a function "bigInteger" takes a string "n" that returns an object that represents this number. 

It should also have a method ("add") where it takes a BigInteger through param and returns the value of the aboject added to the parameter (note that the value of neither the object nor the param change).

It should also have a method ("toString") where it returns a string of the current value of the big integer.

Finally, add a function (addBigIntegers) that is seperate from the object that takes two strings, and returns the sum of their big integers.

HINT: The way I recommend going about this is to have an array of digits that represent each digit in the number, and perform the logic that way. But you may do whatever you want.
## (OPTIONAL) Problem 7: Number to Words
Write a function ("toWords") that takes as a parameter some integer (positive or negative) inclusively between -10,000,000,000,000 and 10,000,000,000,000 (positive and negative ten trillion). The number should return a string of that word written out. For example:
```
toWords(545) // returns "five hundred forty five"
toWords(74) // returns "seventy four"
toWords(54245245467) // returns "fifty four billion two hundred forty five million two hundred forty five thousand four hundred sixty seven"
```
Note the lack of the use of "and".
