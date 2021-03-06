import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    name: 'Name',
    surname: 'Surname',
    email: 'E-mail',
    password: 'Password',
    repassword: 'Repassword',
    phoneNumber: 'Phone number',
    phoneBook: 'Phone book',
    addContact: 'Add contact',
    phone: 'Phone',
    photo: 'Photo',
    contacts: 'Contacts',
    emailIsTaken: 'E-mail is already using!',
    registrationSuccess: 'Registration success',
    emailOrPasswordWrong: 'Email or password wrong',
    contactInsertionSuccessful: 'Contact insertion successful',
    contactDeleteSuccessful: 'Contact deleting successful',
    contactSharingRequestSendSuccessful: '{sent} shared with {sentTo}',
    selectUserForSharing: 'Select user for sharing {name}',
    share: 'Share',
    selectForShare: 'Select contact to share {name}\'s information',
    contactRequestAccept: 'Contact request accepted',
    contactRequestReject: 'Contact request reject',
    contactRequests: 'Contact requests',
    searching: 'Search',
    guide: 'Guide',
    loginOrRegister: 'Login or register',
    ShareContactAnotherUsers: 'Share contact another users',
    contactRequestsFullOfSharedContacts: 'Contact requests full of shared contacts',
    acceptOrRejectYourContactRequest: 'Accept or reject your Contact request',
    acceptedContactRequestIsAddedToContacts: 'Accepted "Contact request" is added to contacts',
  },
  tr: {
    login: 'Giriş yap',
    register: 'Kayıt ol',
    logout: 'Çıkış yap',
    name: 'Ad',
    surname: 'Soyad',
    email: 'E-posta',
    password: 'Parola',
    repassword: 'Yeniden parola',
    phoneNumber: 'Telefon numarası',
    phoneBook: 'Rehber',
    addContact: 'Kişi ekle',
    phone: 'Telefon',
    photo: 'Fotoğraf',
    contacts: 'Kişilerim',
    emailIsTaken: 'E-posta zaten kullanılıyor!',
    registrationSuccess: 'Kayıt olma başarılı',
    emailOrPasswordWrong: 'E-posta yada parola yanlış',
    contactInsertionSuccessful: 'Kişi ekleme başarılı',
    contactDeleteSuccessful: 'Kişi silme başarılı',
    contactSharingRequestSendSuccessful: '{sent}, {sentTo} ile paylaşıldı',
    selectUserForSharing: '{name} i paylaşmak istediğin kullanıcıyı seç',
    share: 'Paylaş',
    selectForShare: '{name} in bilgilerini paylaşmak için kişi seç',
    contactRequestAccept: 'Kişi paylaşımı kabul edildi',
    contactRequestReject: 'Kişi paylaşımı reddedildi',
    contactRequests: 'Kişi paylaşımları',
    searching: 'Arama',
    guide: 'Kılavuz',
    loginOrRegister: 'Giriş yap yada kayıt ol',
    ShareContactAnotherUsers: 'Kişilerini diğer kullanıcılar ile paylaş',
    contactRequestsFullOfSharedContacts: 'Kişi paylaşımları başkalarının sana paylaştıkları kişiler ile dolu',
    acceptOrRejectYourContactRequest: 'Paylaşılan kişiyi kabul et veya reddet',
    acceptedContactRequestIsAddedToContacts: 'Kabul edilen paylaşılan kişi kişilerim\'e eklenir',
  },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

export default i18n;
