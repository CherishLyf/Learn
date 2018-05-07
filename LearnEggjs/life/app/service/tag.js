'use strict';

const Service = require('egg').Service;

class TagService extends Service {
  async add(req) {
    const tag = await this.ctx.model.Tag.add(req);
    return tag;
  }

  async findAll() {
    const tags = await this.ctx.model.Tag.findAll();
    return tags;
  }
}

module.exports = TagService;
