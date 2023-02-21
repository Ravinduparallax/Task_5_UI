import axios from 'axios';

const Api = axios.create({
    base_url :'https://v8.api.storemate.parallaxtec.com/api',
})

export default Api;