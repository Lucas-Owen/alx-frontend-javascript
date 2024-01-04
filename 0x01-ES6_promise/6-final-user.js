import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup (firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((val) => {
      for (const obj of val) {
        if (obj.reason) {
          obj.value = `Error: ${ obj.reason.message }`;
          delete obj.reason;
        }
      }
      console.log(val)
      return val;
    });
}
