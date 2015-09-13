# Javascript-Practice
Intended for Purdue SIGART 2015 to use to practice Javascript stuff.
Below are problems, and you can work them out in your respective branches.

## Working with Git
Run the following command to get the repository onto your machine:
```
git clone <url>
```
where <url> is the clone URL. You should see this on the project page on the right hand side.
Once you clone the branch, you should make your own branch:
```
git checkout -b <Your Name>
```
This will allow you to work on and publish your own solutions to these exercises while allowing others to work on them as well.
Once you are done, type the following to commit:
```
git commit -m "Implemented Problems"
git push origin <Your Branch>
```
You should now see your solutions appear under your branch on github.

*Please do not publish your solutions to the master branch*

## Problem 1: Concatenating Strings
Write a function "concatenate" that takes an array of strings as a parameter, and return a string of all elements concatenated to eachother.
Each should be seperated by a space, but no space should appear on either end of the string.
Example Usage:
```
concatenate(["Hello", "World", "This", "Is", "SIGART"]); // Should return "Hello World This Is Sigart"
```
