import axios from 'axios';

const addContactService = (userData) => {
  axios.put(`/users/${userData.id}`, userData);
};

const shareContactService = () => {

};

export {
  addContactService,
  shareContactService,
};
