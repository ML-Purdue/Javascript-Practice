// Problem 1

function concatenate(list) {
	var output = "";
	for (i = 0; i < list.length - 1; i++)
		output += list[i] + ' ';
	output += list[list.length - 1];
	return output;
}