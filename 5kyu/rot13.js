/*
 Description:
 How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

 I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

 Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

 rot13("EBG13 rknzcyr.") == "ROT13 example.";
 rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"
 */

/*
 * Decodes and Encodes ROT13 code
 * @param {string} str string to operate on
 * @return {string) result of encryption
 */
function rot13(str) {
  return str.split('').map((c, i) => {
    let code = str.charCodeAt(i);
    let newCode = code + 13;
    if (code >= 65 && code <= 90) {
      newCode = newCode > 90 ? 65 + (newCode - 90) - 1 : newCode;

      return String.fromCharCode(newCode);
    } else if (code >= 97 && code <= 122) {
      newCode = newCode > 122 ? 97 + (newCode - 122) - 1 : newCode;

      return String.fromCharCode(newCode);
    }

    return c;
  }).join('');
}