const axios = require('axios');
module.exports ={
async getDevs(req, res) {
  const userDiscApi = axios.create({baseURL: `https://discord.com/api/v8/users/`,headers: {"Content-Type": "application/json","Authorization": `Bot ${process.env.botToken}`}});
 let re = await Promise.all(req.body["developers"].map(async dev => (await userDiscApi.get(dev)).data)).catch(e => false);
let ret = re ? {success: true, developers: re}: {success: false}

return res.send(ret);
  
}
};