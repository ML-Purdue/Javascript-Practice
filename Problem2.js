// Problem 2

function fizzBizz(num) {
	var string = "" + num
	if (num % 3 == 0 && num % 5 != 0) {
		string = "Fizz"
	}
	if (num % 3 != 0 && num % 5 == 0) {
		string = "Bizz"
	}
	if (num % 3 == 0 && num % 5 == 0) {
		string = "FizzBizz"
	}
	return string;
}
