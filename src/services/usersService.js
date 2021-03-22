import axios from 'axios';

const getAllUserService = () => axios.get('/users').then((res) => res.data);

export default getAllUserService;
