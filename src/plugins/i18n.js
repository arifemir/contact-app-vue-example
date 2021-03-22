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
    emailIsTaken: 'E-mail is already using!',
    registrationSuccess: 'Registration success',
    emailOrPasswordWrong: 'Email or password wrong',
    contactInsertionSuccessful: 'Contact insertion successful',
    contactDeleteSuccessful: 'Contact deleting successful',
    contactSharingRequestSendSuccessful: 'Contact sharing request send successful',
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
    emailIsTaken: 'E-posta zaten kullanılıyor!',
    registrationSuccess: 'Kayıt olma başarılı',
    emailOrPasswordWrong: 'E-posta yada parola yanlış',
    contactInsertionSuccessful: 'Kişi ekleme başarılı',
    contactDeleteSuccessful: 'Kişi silme başarılı',
    contactSharingRequestSendSuccessful: 'Kişi paylaşma sorgusu yollanıldı',
  },
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

export default i18n;
