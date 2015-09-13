// Problem 6

function max(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

function reverse(str) {
	o = "";
	for (var i = str.length - 1; i >= 0; i--) {
		o += str.charAt(i);
	}
	return o;
}

function bigInteger(n) {
	this.num = [];
	for (var i = 0; i < n.length; i++) {
		this.num.push(parseInt(n.charAt(n.length - 1 - i)));
	}
	this.add = function(number) {
		var thisNumber = "";
		var carry = 0;
		for (var j = 0; j < max(number.num.length, this.num.length); j++) {
			var toAdd = 0;
			if (j >= number.num.length) {
				toAdd = this.num[j] + carry;
			} else if (j >= this.num.length) {
				toAdd = number.num[j] + carry;
			} else {
				toAdd = number.num[j] + this.num[j] + carry;
			}
			if (toAdd < 10) {
				thisNumber += toAdd;
				carry = 0;
			} else {
				thisNumber += (toAdd - 10);
				carry = 1;
			}
		}
		return new bigInteger(reverse(thisNumber));
	};
	this.toString = function() {
		var thisNumber = "";
		for (var k = 0; k < this.num.length; k++) {
			thisNumber += this.num[this.num.length - 1 - k];
		}
		return thisNumber;
	};
	return this;
}

function addBigIntegers(n1, n2) {
	var n1B = new bigInteger(n1);
	var n2B = new bigInteger(n2);
	return n1B.add(n2B);
}