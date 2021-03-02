import Api from './Api.js';
const controllers = ["Profile", "Anime", "Authentication"];
export default  {
 async getData (controller, action) {
   if(!controllers.include(controller)) throw new Error("Invalid controller");
  const req = await Api.post({controller, action});
   return req;
},
  async postData(controller, action, data) {
    if(!controllers.include(controller)) throw new Error("Invalid controller");
    const req = await Api.post({controller, action, ...data});
    return req
  }
}