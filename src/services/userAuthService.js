import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import useSwalToast from '@/helpers/swalHelper';
import i18n from '@/plugins/i18n';

const registerService = ({
  name, surname, email, password,
}) => (async () => {
  const user = await axios.get(`/users?email=${email}`).then((res) => res.data);

  if (user.length > 0) {
    useSwalToast('warning', i18n.t('emailIsTaken'));
    return '';
  }

  const data = await axios.post('/users', {
    id: uuidv4(),
    name,
    surname,
    email,
    password,
    contacts: [],
    contactRequests: [],
  }).then((r) => r.data);

  useSwalToast('success', i18n.t('registrationSuccess'));
  return data;
})();

const loginService = ({ email, password }) => (async () => {
  let users = await axios.get('/users').then((res) => res.data);
  users = users.find((u) => (u.email === email) && (u.password === password));
  if (!users) useSwalToast('warning', i18n.t('emailOrPasswordWrong'));
  return users;
})();

export {
  registerService,
  loginService,
};
