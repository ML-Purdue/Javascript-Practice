// Problem 3

function fib(n) {
	var fib = [1, 1];
	for (i = 2; i < n + 1; i++) {
		fib[i] = fib[i - 2] + fib[i - 1];
	}
	return fib[n];
}
