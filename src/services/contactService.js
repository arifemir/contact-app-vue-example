import axios from 'axios';
import useSwalToast from '@/helpers/swalHelper';
import i18n from '@/plugins/i18n';

/**
 * all services doing same thing i know,
 * but i want to make separate functions,
 * bec normally this functions do not work same
 */

const addContactService = (userData) => {
  axios.put(`/users/${userData.id}`, userData);
  useSwalToast('success', i18n.t('contactInsertionSuccessful'));
};

const deleteContactService = (userData) => {
  axios.put(`/users/${userData.id}`, userData);
  useSwalToast('success', i18n.t('contactDeleteSuccessful'));
};

const shareContactService = (userData) => {
  axios.put(`/users/${userData.id}`, userData);
  useSwalToast('success', i18n.t('contactSharingRequestSendSuccessful'));
};

export {
  addContactService,
  deleteContactService,
  shareContactService,
};
