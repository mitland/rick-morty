const NAME_ERRORS = {
  LENGTH_ERROR: 'Name should be at least 1 charecter',
  ALPHABETICAL_ERROR: 'Name can only have alphabetical characters',
};

function nameValidator(name) {
  const alphabeticalRegex = /[^a-zA-Zа-яА-Я]+/g;
  const createValidatorObject = (error) => {
    return {
      error,
      isValid: error.length === 0,
    };
  };

  if (name.length === 0) {
    return createValidatorObject(NAME_ERRORS.LENGTH_ERROR);
  }

  if (name.match(alphabeticalRegex)) {
    return createValidatorObject(NAME_ERRORS.ALPHABETICAL_ERROR);
  }

  return createValidatorObject('');
}

export { nameValidator };
