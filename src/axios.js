import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://amazon-react-clone.herokuapp.com/'
    // https://amazon-react-clone.herokuapp.com/
});

export default instance;