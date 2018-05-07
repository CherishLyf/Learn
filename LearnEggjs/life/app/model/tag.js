'use strict';

module.exports = app => {
  const { STRING } = app.Sequelize;

  const Tag = app.model.define('tag', {
    name: STRING,
    des: STRING,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });

  Tag.add = async function(fields) {
    return await this.create(fields);
  };

  Tag.findAll = async function() {
    return this.findAll({
      attributes: 'name',
    });
  };

  return Tag;
};
