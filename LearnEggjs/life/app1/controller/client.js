'use strict';

const Controller = require('egg').Controller;

class ClientController extends Controller {
  async add() {
    const { ctx, service } = this,
      clientRule = {
        clientId: { type: 'string' },
        // clientSecret: { type: 'string' },
        // redirectUri: { type: 'string' },
        // grants: { type: 'string' },
      },
      params = ctx.request.body;
    // 检验参数
    ctx.validate(clientRule);
    const client = await service.client.add(params);
    // console.log(client);
    ctx.body = {
      clientId: client.clientId,
    };
  }

}

module.exports = ClientController;
