export const titleCase = word => {
  if (word || typeof word === String) {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstLetter + restOfWord;
  }
};

export const urlFriendly = text => text.replace(/\s+/gi, '').toLowerCase();

export const suffixAsync = actionType => {
  // return type: capitalized strings
  const TYPE = actionType.toUpperCase();
  const REQUEST = TYPE + '_REQUEST';
  const SUCCESS = TYPE + '_SUCCESS';
  const FAILURE = TYPE + '_FAILURE';
  return [REQUEST, SUCCESS, FAILURE];
};

export const validateRegister = fieldsObj => {
  const { email, password, confirm } = fieldsObj;
  // regex will allow something as simple as 'a@a.a'
  const re = /.+@.+\..+/;
  const errors = [];
  if (!email) errors.push('A valid email is required.');
  if (!password) errors.push('Password required.');
  if (!confirm) errors.push('Password confirmation required.');
  if (password.length < 6)
    errors.push('Password length must be at least 6 characters..');
  if (password !== confirm)
    errors.push('Entered password does not match confirmation password.');
  if (!re.test(email)) errors.push('Please enter a valid email.');
  return errors;
};
