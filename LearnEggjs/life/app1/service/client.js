'use strict';

const Service = require('egg').Service;

class ClientService extends Service {
  async add(params) {
    const client = await this.ctx.model.Client.add(params);
    return client;
  }
}

module.exports = ClientService;
