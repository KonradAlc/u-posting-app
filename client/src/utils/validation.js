export const validate = (value = "", max = 255, min = 0, name = "", type = "text") => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersLatinExtended = "ąćęłńóśźżĄĆĘŁŃÓŚŹŻ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()+,.?-_";
  const textChars = "?!.:\"'\n";
  const whiteSpace = " ";

  let allowedCharacters = "";
  let message = "";

  switch (type) {
    case "letter":
      allowedCharacters = letters + lettersLatinExtended;
      break;
    case "number":
      allowedCharacters = numbers;
      break;
    case "text":
      allowedCharacters = letters + lettersLatinExtended + numbers + specialChars + whiteSpace + textChars;
      break;
    default:
      allowedCharacters = letters + lettersLatinExtended + numbers + specialChars + whiteSpace + textChars;
      break;
  }

  // Sprawdzenie długości znaków
  if (value.length <= 0) {
    message += "\n• nie może być puste";
  } else if (min === max) {
    if (value.length < max) {
      message += `\n• musi zawierać ${max} znaków`;
    }
  } else {
    if (value.length < min || value.length > max) {
      message += `\n• musi zawierać ${min} - ${max} znaków`;
    }
  }

  // Characters validation

  const notMatched = getNotIncludedCharacter(value, allowedCharacters);
  if (notMatched.length > 0) {
    let preparedNotMatched = notMatched;
    preparedNotMatched = preparedNotMatched.replaceAll("\n", "");
    preparedNotMatched = preparedNotMatched.replaceAll(" ", "");

    message += `\n• znaki [ ${preparedNotMatched} ] są zabronione`;
    if (notMatched.includes(" ")) message += "\n• nie może zawierać spacji";
    if (notMatched.includes("\n")) message += "\n• nie może zawierać enterów";
  }

  if (message.length > 0) {
    return `Pole "${name}" ${message}`;
  }

  return message;
};

export const getNotIncludedCharacter = (string1, characters) => {
  if (!string1 || !characters) return false;
  let notMatched = "";
  string1.split("").forEach((char) => {
    if (!characters.includes(char)) notMatched += char;
  });

  // remove duplicates
  const preparedNotMatched = Array.from(new Set(notMatched.split(""))).join("");

  return preparedNotMatched;
};
