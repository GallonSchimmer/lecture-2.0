// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false

// lessThanOrEqualToZero(0) ➞ true

// lessThanOrEqualToZero(-2) ➞ true
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function LessThanEqualToZero (num) {
  var LessEqual = x;
  if (x <= 0) "true";
  else (x > 0) "false";
  return LessThanEqualZero;
}; LessThanEqualToZero();

function LessThanEqualToZero (num) {

  if (num <= 0) return true;
  else return false;
}; LessThanEqualToZero();
// funciona en console


//Conditional Ternary Operator
//var voteable = (age < 18) ? "Too young":"Old enough";
function LessThanEqualToZero (num) {
  var x = (num);
  var TrueFalse = (x <= 0) ? "True": "False";
  return TrueFalse;
};LessThanEqualToZero();
// in the console it works but in//
// the edabit it says error//

//If else de mozilla
function LessThanEqualToZero(num) {
  let result;
  if (num <= 0) {
    result = 'true';
  } else {
    result = 'false';
  }
  return result;
}; LessThanEqualToZero();

// solutions edabit
function lessThanOrEqualToZero(num) {
	return num <= 0;
}

const lessThanOrEqualToZero = num => num <= 0;

function lessThanOrEqualToZero(num) {
	if(num <= 0)
		return true;
	else
		return false;
}


function lessThanOrEqualToZero(num) {
	let result = num <= 0 ? true : false;
	return result;
}


function lessThanOrEqualToZero(num) {
if(num === 0 || num < 0){
	return true;
	}else return false
}
