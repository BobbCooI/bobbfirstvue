import axios from 'axios';
export default {
  server: axios.create({
    baseURL: `https://bobbfirstvue.bobberson.repl.co/api`,
    responseType: 'json',
    headers: {"Content-Type": "application/json"}
  })
};