import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;

  uploadPhoto()
    .then((obj) => {
      body = obj.body;
    })
    .then(() => createUser())
    .then((obj) => {
      console.log(body, obj.firstName, obj.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
