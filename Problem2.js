// Problem 2

function fizzBizz(num) {
	if (num % 3 != 0 && num % 5 != 0)
		return "" + num;
	else if (num % 3 == 0 && num % 5 != 0)
		return "Fizz";
	else if (num % 3 != 0 && num % 5 == 0)
		return "Bizz";
	else
		return "FizzBizz";
}