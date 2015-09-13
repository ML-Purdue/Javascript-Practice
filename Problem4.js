// Problem 4

function isPalindrome(n) {
	var number = n + "";
	for (i = 0; i < number.length / 2; i++) {
		if (number.charAt(i) === number.charAt(number.length - 1 - i)) {
			return true;
		}
	return false;
	}
	return false;
}
