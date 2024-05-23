import permittedCaracters from './utils/permittedCaracters.js';

async function handle() {
  let caracters = [],
    password = '',
    pwLength = process.env.PASSWORD_LENGTH;
  caracters = await permittedCaracters();

  for (let i = 0; i < pwLength; i++) {
    const index = Math.floor(Math.random() * caracters.length);
    password += caracters[index];
  }
  return password;
}

export default handle;
