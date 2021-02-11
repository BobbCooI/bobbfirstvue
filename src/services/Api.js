
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://bobbfirstvue-1.bobberson.repl.co/api`,
    responseType: 'json',
    headers: {"Content-Type": "application/json"}
  })
}