// Problem 4

function flr(n) {
	return n - (n % 1);
}

function isPalindrome(n) {
	var str = n + "";
	for (var i = 0; i < flr(str.length / 2); i++) {
		if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
			return false;
		}
	}
	return true;
}