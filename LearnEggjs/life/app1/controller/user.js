'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {

  async add() {
    const user = await this.ctx.model.User.register({
      name: 'test2',
      password: '123456',
    });

    this.ctx.body = {
      id: user.id,
      name: user.name,
    };
  }

  async authorize() {
    const query = this.ctx.querystring;
    console.log(query);
  }

  async authenticate() {
    this.ctx.body = {
      msg: 'successed!',
    };
  }

  async token() {
    this.ctx.body = this.ctx.state.oauth.token;
  }
}

module.exports = UsersController;
