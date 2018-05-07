'use strict';

const Controller = require('egg').Controller;

class TagController extends Controller {
  async add() {
    const { ctx, service } = this;
    const addRule = {
      name: { type: 'string' },
    };

    console.log(this.ctx.request.body.name);
    // 校验参数
    try {
      ctx.validate(addRule);
    } catch (err) {
      ctx.body = {
        code: err.code,
        message: err.message,
        error: err.errors,
      };
      return;
    }

    const { name, des } = ctx.request.body;
    const req = {
      name,
      des,
    };
    const tag = await service.tag.add(req);
    ctx.body = tag;
  }

  async findAll() {
    const { ctx, service } = this;
    const tags = service.tag.findAll();

    ctx.body = tags;
  }
}

module.exports = TagController;
