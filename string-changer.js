function stringChanger(word, operation) {
  switch (operation) {
    case "capitalize":
      const capWord = word.charAt(0).toUpperCase() + word.slice(1);
      return capWord;

      break;

    case "uppercase":
      const uppercaseWord = word.toUpperCase();
      return uppercaseWord;

      break;

    case "double":
      const doubleWord = word.repeat(2);
      return doubleWord;

      break;

    case "reverse":
      const wordArray = word.split("");
      let reverseArray = wordArray.reverse();
      let reverseWord = reverseArray.join("");
      return reverseWord;

      break;

    default:
      return word;
      break;
  }
}

let score = 0;

console.log(stringChanger("foo", "reverse"));

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;
if (stringChanger("foo", "unknown") === "foo") score++;

console.log(score);
