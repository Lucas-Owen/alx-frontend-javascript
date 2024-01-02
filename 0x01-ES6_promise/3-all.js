import { uploadPhoto, createUser } from "./utils";

const fail = () => console.log("Signup system offline");

export default function handleProfileSignup () {
    Promise.all([uploadPhoto(), createUser()]).then(([{ body }, { firstName, lastName }]) => console.log(body, firstName, lastName)).catch(() => fail())
}
