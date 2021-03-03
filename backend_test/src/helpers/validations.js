

const isValidEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
};

const isEmpty = (input) => {
    if (input === undefined || input === '') {
      return true;
    }
    if (input.replace(/\s/g, '').length) {
      return false;
    } 
    return true;
};

const empty = (input) => {
  if (input === undefined || input === '') {
    return true;
  }
};

module.exports =  {
    isValidEmail,
    isEmpty,
    empty
};