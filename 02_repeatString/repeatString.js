var Stringg = '';
var Numberr = 0;
var endString ;
const repeatString = function(Stringg, Numberr) {
			endString = Stringg;
	for ( i = 1 ; i < Numberr; i++) {
		endString = endString + Stringg;
	}
	if (Numberr === 0) {
		return '';
	}
	else if (Numberr < 0) {
		return 'ERROR';
	}
	else {
	return endString;
	}
}
repeatString(Stringg, Numberr);
// Do not edit below this line
module.exports = repeatString;
