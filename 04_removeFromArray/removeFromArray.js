var fullArray = [];// takes array
var arrayDelete = []; // takes thing to remove
var finalArray = [];
const removeFromArray = function(fullArray, arrayDelete) {
 finalArray = fullArray.filter(function(removeYes){
	 return arrayDelete.includes(removeYes);
 });
	
		return finalArray;
};

removeFromArray(fullArray, arrayDelete);
// Do not edit below this line
module.exports = removeFromArray;
