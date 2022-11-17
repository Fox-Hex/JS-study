class PasswordValidator {
  constructor(options) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    }
    this.options = {...defaultOptions, ...options}
  }

  validate(password) {
    const error = {}
    if (password.length < this.options.minLength) {
      error.minLength = 'too small'
    }
    if (this.options.containNumbers && password.search(/\d/) === -1) {
      error.containNumbers = 'should contain at least one number'
    }
    return error
  }
}




const validator = new PasswordValidator({ containNumbers: false });

console.table(validator);

console.log(validator.validate('qwertyui')); // {}
console.log(validator.validate('qwerty')); // { minLength: 'too small' }
console.log(validator.validate('qwerty45'));