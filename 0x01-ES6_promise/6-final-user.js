import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup (firstName, lastName, fileName) {
    return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
        .then((val) => { return { status: "fulfilled", value: val } })
        .catch((err) => { return {status: "failed", value: err }})
}
