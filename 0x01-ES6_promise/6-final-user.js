import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return Promise
    .allSettled([uploadPhoto(filename), signUpUser(firstName, lastName)])
    .then((values) => (
      values.map((value) => ({
        status: value.status,
        value: value.status === 'fulfilled' ? value.value : String(value.reason),
      }))
    ));
}
