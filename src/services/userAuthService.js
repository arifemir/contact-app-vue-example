import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const registerService = ({
  name, surname, email, password,
}) => (async () => {
  const user = await axios.get(`/users?email=${email}`).then((res) => res.data);
  if (user.length > 0) {
    alert('email is taken');
    return '';
  }
  const data = await axios.post('/users', {
    id: uuidv4(),
    name,
    surname,
    email,
    password,
    contacts: [],
  }).then((r) => r.data);
  return data;
})();

const loginService = ({ email, password }) => (async () => {
  const users = await axios.get('/users').then((res) => res.data);
  return users.find((u) => (u.email === email) && (u.password === password));
})();

export {
  registerService,
  loginService,
};
