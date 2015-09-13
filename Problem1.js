// Problem 1

function concatenate(list) {
	var sentence = list[0];
	for (i = 1; i < list.length; i++) {
		sentence = sentence + " " + list[i];
	}
	return sentence;
}
