import axios from 'axios';

import { BASE_URL } from '../utils/contants';

const instance = axios.create({ baseURL: BASE_URL });
instance.interceptors.request.use((config) => config);

export default instance;
