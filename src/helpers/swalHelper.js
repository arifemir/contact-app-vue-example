import Vue from 'vue';

/**
 * This function helper for sweetAlert Toast
 * @param {string} icon - The icon name of the toast
 * @param {string} title - The title of the toast
 */
const useSwalToast = (icon, title) => {
  Vue.swal({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    icon,
    title,
  });
};

export default useSwalToast;
