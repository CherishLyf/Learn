'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Design = app.model.define('design', {
    title: STRING,
    des: STRING,
    type: STRING,
    img: STRING,
    link: STRING,
    tag: INTEGER,
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });

  return Design;
};
