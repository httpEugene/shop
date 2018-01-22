const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.username.length < 5) {
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
  } else if (!/^(?=.*?[a-z])(?=.*?[0-9]).{5,}$/i.test(values.password)) {
    errors.password =
      'At least one lower case English letter. At least one digit. Minimum 5 in length';
    // At least one upper case English letter, (?=.*?[A-Z])
    // At least one lower case English letter, (?=.*?[a-z])
    // At least one digit, (?=.*?[0-9])
    // At least one special character, (?=.*?[#?!@$%^&*-])
    // Minimum six in length .{6,} (with the anchors)
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords don't match.";
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (Number.isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }

  const errorsOutput = {};

  /* eslint no-restricted-syntax: 0 */
  for (const prop in errors) {
    if (Object.keys(values).includes(prop)) {
      errorsOutput[prop] = errors[prop];
    }
  }

  return errorsOutput;
};

const warn = (values) => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...';
  }
  return warnings;
};

export { validate, warn };
