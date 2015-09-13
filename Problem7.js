// Problem 7

/// ********************
/// ********************
/// *** NOT FINISHED ***
/// ********************
/// ********************

function getBig(n) {
	switch(n) {
		case(1):
			return "thousand";
		case(2):
			return "million";
		case(3):
			return "billion";
		case(4):
			return "trillion";
	}
}

function getHundred(n) {
	if (n < 100) {
		return getTens(n);
	}
	var str = "";
	str += getSmall(n - (n % 100));
}

function getTens(n) {
	if (n < 10) {
		return getSmall(n);
	switch(n) {
		case (10):
			return "ten";
		case (11):
			return "eleven";
		case (12):
			return "twelve";
		case (13):
			return "thirteen";
		case (14):
			return "fourteen";
		case(15):
			return "fifteen";
		case(16):
			return "sixteen";
		case(17):
			return "seventeen";
		case(18):
			return "eighteen";
		case(19):
			return "nineteen";
	}
	if (n < 30)
		return "twenty " + 
}

function getSmall(n) {
	switch(n) {
		case(0):
			return "";
		case(1):
			return "one";
		case(2):
			return "two";
		case(3):
			return "three";
		case(4):
			return "four";
		case(5):
			return "five";
		case(6):
			return "six";
		case(7):
			return "seven";
		case(8):
			return "eight";
		case(9):
			return "nine";
	}
}

function toWords(n) {
	var str = "";
	if (n < 0) {
		str += "negative ";
		n *= -1;
	
}
