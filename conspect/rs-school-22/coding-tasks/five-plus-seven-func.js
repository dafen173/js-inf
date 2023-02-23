// five(plus(seven(minus(three())))) -> 9. How to implement?



function five(arg) {
	return 5 + (arg || 0);
}

function seven(arg) {
	return 7 + (arg || 0);
}

function three(arg) {
	return 3 + (arg || 0);
}

function plus(arg) {
	return arg;
}

function minus(arg) {
	return -arg;
}


let res = five(plus(seven(minus(three()))))

// let res = five(plus(seven()))

console.log(res);
