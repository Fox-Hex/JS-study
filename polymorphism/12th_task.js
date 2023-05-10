import crypto from 'crypto';
import generator from 'generate-password';

class PasswordBuilder {
  constructor(passwordGenerator) {
    this.passwordGenerator = passwordGenerator;
  }

  buildPassword(length = 8, options = ['numbers', 'symbols']) {
    const password = this.passwordGenerator.generatePassword(length, options);
    const digest = crypto.createHash('sha1').update(password).digest('hex');

    return { password, digest };
  }
}

class PasswordGeneratorAdapter {
  generatePassword(length, options) {
    const defaultParams = {
      uppercase: false,
      numbers: false,
      symbols: false,
    }
    options.forEach(elem => params[elem] = true)
    return generator.generate({length, ...params})
  }
}


const builder = new PasswordBuilder(new PasswordGeneratorAdapter());
 
const passwordInfo = builder.buildPassword(10, ['uppercase', 'symbols']);
console.log(passwordInfo);
// {
//    password: 'giK-;SH?Jx',
//    digest: '379ad800edca49029fb90e7200001812277bbeae',
// }
 
const passwordInfo2 = builder.buildPassword(10, []);
console.log(passwordInfo2);
// {
//    password: 'zgalhrheru',
//    digest: '97d73ac22ad943d2db824712154b3f354cd80d10',
// }