import axios from "axios";

const shopApi = axios.create({
    baseURL: '/api/shop',
    timeout: 5 * 1000
});

export default shopApi;