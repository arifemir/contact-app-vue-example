import axios from 'axios';
import useSwalToast from '@/helpers/swalHelper';
import i18n from '@/plugins/i18n';

const addContactService = (userData) => {
  axios.put(`/users/${userData.id}`, userData);
  useSwalToast('success', i18n.t('contactInsertionSuccessful'));
};

const shareContactService = () => {
  useSwalToast('success', i18n.t('contactSharingRequestSendSuccessful'));
};

export {
  addContactService,
  shareContactService,
};
