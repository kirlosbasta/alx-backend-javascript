import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    user = await uploadPhoto();
    photo = await createUser();
  } catch (err) {
    user = null;
    photo = null;
  }
  return { photo, user };
}
