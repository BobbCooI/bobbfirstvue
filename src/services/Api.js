import axios from 'axios';
console.log(process.env.botToken)
export default {
  server: axios.create({
    baseURL: `https://bobbfirstvue.bobberson.repl.co/api`,
    responseType: 'json',
    headers: {"Content-Type": "application/json"}
  }),
  Discord: axios.create({
    baseURL: `https://discord.com/api/v8/users/@me`,
    headers: {"Content-Type": "application/json","Authorization": `Bot ODAwOTUyNjMzMjQxNTAxNjk2.YAZnRA.5nZxML4yliYXyKKAXB_N8uAalpE`}
  })
};