import Guest from './files/Guest.js';
import User from './files/User.js';

const getGreeting = (user) => {
  const greetingText = {
    Guest: `Nice to meet you ${user.getName()}!`,
    User: `Hello ${user.getName()}!`
  }
  return user.isUser() ? greetingText.User : greetingText.Guest
}



const guest = new Guest();
console.log(getGreeting(guest)); // 'Nice to meet you Guest!'
 
const user = new User('Petr');
console.log(getGreeting(user)); // 'Hello Petr!'