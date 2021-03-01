const axios = require('axios');
module.exports ={
async getDevs(req, res) {
  const userDiscApi = axios.create({baseURL: `https://discord.com/api/v8/users/`,headers: {"Content-Type": "application/json","Authorization": `Bot ODAwOTUyNjMzMjQxNTAxNjk2.YAZnRA.5nZxML4yliYXyKKAXB_N8uAalpE`}});
 let re = await Promise.all(req.body["developers"].map(async dev => (await userDiscApi.get(dev)).data));
return res.send({developers: re});
  
}
};