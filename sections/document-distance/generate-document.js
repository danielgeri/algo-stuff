const assert = require('assert');

/*
  You're given a string of characters and a string representing a
  document that you need to generate. Write a function that determines if you
  can generate the document using the available characters. If you can generate
  the document, your function should return <span>true</span>; otherwise, it
  should return <span>false</span>.

	You're only able to generate the document if the frequency of unique
  characters in the characters string is greater than or equal to the frequency
  of unique characters in the document string. For example, if you're given
  <span>characters = "abcabc"</span> and <span>document = "aabbccc"</span> you
  <b>cannot</b> generate the document because you're missing one <span>c</span>.

	The document that you need to create may contain any characters, including
  special characters, capital letters, numbers, and spaces.

	Note: you can always generate the empty string ""
	
Sample Input
characters = "Bste!hetsi ogEAxpelrt x "

document = "AlgoExpert is the Best!"

Sample Output
true

*/

// 1) check if both args are empty strings -> return true
// 2) check to see if the lengths of the args are the same.  if not -> false
// 3) some kind of object mapping strategy
// 4) iterate over the strings and:
// .   a) for every character in chars map a +1 to a property with the name of the char
//     b) for every character in doc map a -1 to a property with the name of the char
//
function genDoc(chars, doc) {
  if (!chars && !doc) {
    return false;
  }

  if (chars.length !== doc.length) {
    return false;
  }

  const charsMap = {};
  const docMap = {};

  for (let i = 0; i < chars.length; i++) {}
}

describe('doc dist - generate doc', function () {
  it('should pass', function () {
    assert.strictEqual(genDoc('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!'), true);
  });
});
