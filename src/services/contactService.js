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

const shareContactService = (sent, sentTo) => (async () => {
  const user = await axios.get(`/users/${sentTo.id}`).then((res) => res.data);
  user.contactRequests.push(sent);
  await axios.put(`/users/${sentTo.id}`, user);
  useSwalToast('success', i18n.t('contactSharingRequestSendSuccessful', { sent: sent.name, sentTo: sentTo.name }));
})();

const contactRequestAcceptService = (userData) => {
  axios.put(`/users/${userData.id}`, userData);
  useSwalToast('success', i18n.t('contactRequestAccept'));
};

const contactRequestRejectService = (userData) => {
  axios.put(`/users/${userData.id}`, userData);
  useSwalToast('success', i18n.t('contactRequestReject'));
};

export {
  addContactService,
  deleteContactService,
  shareContactService,
  contactRequestAcceptService,
  contactRequestRejectService,
};
