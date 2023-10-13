// complete the given function

function palindrome(str){
 // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Compare the reversed string with the original string
  return str === str.split('').reverse().join('');
}
module.exports = palindrome
