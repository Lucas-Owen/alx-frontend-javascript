import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((val) => {
      for (const obj of val) {
        if (obj.reason) {
          obj.value = obj.reason;
          delete obj.reason;
        }
      }
      return val;
    });
}
