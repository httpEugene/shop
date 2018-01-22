import { usernameLengthMax, usernameLengthMin } from '../constants/login-validation-constants';

const validate = ({username, password, confirmPassword, email, age}) => {
  const errors = {};
  if (!username) {
    errors.username = 'Required';
  } else if (username.length > usernameLengthMax) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!password) {
    errors.password = 'Required';
  } else if (username.length < usernameLengthMin) {
    errors.username = 'Must be 5 characters or more';
    // } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).
    // {6,}$/i.test(values.password)) {
    //  errors.password = 'At least one upper case English letter.
    //  At least one lower case
    //  English letter. At least one special character. Minimum six in length';
    //  At least one upper case English letter, (?=.*?[A-Z])
    //  At least one lower case English letter, (?=.*?[a-z])
    //  At least one digit, (?=.*?[0-9])
    //  At least one special character, (?=.*?[#?!@$%^&*-])
    //  Minimum six in length .{6,} (with the anchors)
    // }
  } else if (!/^(?=.*?[a-z])(?=.*?[0-9]).{5,}$/i.test(password)) {
    errors.password =
      'At least one lower case English letter. At least one digit. Minimum 5 in length';
    // At least one upper case English letter, (?=.*?[A-Z])
    // At least one lower case English letter, (?=.*?[a-z])
    // At least one digit, (?=.*?[0-9])
    // At least one special character, (?=.*?[#?!@$%^&*-])
    // Minimum six in length .{6,} (with the anchors)
  }

  if (!confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Passwords don't match.";
  }

  if (!email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
  if (!age) {
    errors.age = 'Required';
  } else if (Number.isNaN(Number(age))) {
    errors.age = 'Must be a number';
  } else if (Number(age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }

  const errorsOutput = {};

  /* eslint no-restricted-syntax: 0 */
  for (const prop in errors) {
    if (Object.keys(val).includes(prop)) {
      errorsOutput[prop] = errors[prop];
    }
  }

  return errorsOutput;
};

const warn = ({age}) => {
  const warnings = {};
  if (age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};

export { validate, warn };
