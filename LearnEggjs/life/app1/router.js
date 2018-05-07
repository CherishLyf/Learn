'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // client api
  router.post('/client/add', controller.client.add);

  // user api
  router.post('/user/add', controller.user.add);

  // auth
  app.get('/authorize', controller.user.authorize);
  app.all('/user/token', app.oAuth2Server.token(), controller.user.token); // 获取token
  app.all('/user/authorize', app.oAuth2Server.authorize()); // 获取授权码
  app.all('/user/authenticate', app.oAuth2Server.authenticate(), controller.user.authenticate); // 验证请求
};
