module.exports = function toReadable (number) {
   var onetonineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var twentytoninety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var hundredtoninehun = ['','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred',
              'nine hundred'];		  

  var numString = number.toString();

  
  if (number === 0) return 'zero';

    if (number < 20) {
    return onetonineteen[number];
  }

  if (numString.length === 2){
    if (numString[1] === '0') return twentytoninety[numString[0]]
    if (numString[1] !== '0')
    return twentytoninety[numString[0]] + ' ' + onetonineteen[numString[1]];
  }

  
  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      return onetonineteen[numString[0]] + ' hundred';
    else
      return onetonineteen[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2]));
  }}
 
