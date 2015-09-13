// Problem 6

function bigInteger(n) {
	this.bigNumber = [n.length];
	for (i = 0; i < n.length; i++) {
		this.bigNumber[i] = n.charAt(i);
	}
	this.add = function(BigInteger) {
		this.bigInteger = [BigInteger.length];
		for (i = 0; i < BigInteger.length; i++) {
			this.bigInteger[i] = BigInteger.charAt(i);
		}
		var length = this.bigNumber.length - this.bigInteger.length;
		while (length > 0) {
			this.bigNumber.unshift("0")
			length = length - 1;
		}
		for (i = 0; i < this.bigInteger.length; i++) {
			this.bigInteger[i] = parseInt(this.bigInteger[i]) - parseInt(this.bigNumber[i]);
		}
		for (i = this.bigInteger.length - 1; i >= 0; i--) {
			if (this.bigInteger[i] > 9 && i > 0) {
				this.bigInteger[i] = this.bigInteger[i] - 10;
				this.bigInteger[i - 1] = this.bigInteger[i - 1] + 1;
			}
			if (this.bigInteger[i] > 9 && i = 0) {
				this.bigInteger.unshift(1);
			}
		}
		return this.bigInteger;
	};
	this.toString = function() {
		var string = "";
		for (i = 0; i < this.bigInteger.length; i++) {
			string = string + this.bigInteger[i];
		}
		return this.string;
	};
	return this;
}

function addBigIntegers(n1, n2) {
	return "";
}
