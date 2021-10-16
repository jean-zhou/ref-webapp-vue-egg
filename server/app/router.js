'use strict';

/**
 * 路由
 * @param {Egg.Application} app - 当前应用的实例
 * @author ruiyong-lee
 */
module.exports = app => {
  const { router, controller, io } = app;
  const { user, utils, goodsOrder, goods, goodsCategory, freightPlan, deliveryTimeType, statistics, notice } = controller;
  /**
   * 管理端
   */

  // 账户相关
  router.post('/user/login', user.common.login);
  router.post('/user/logout', user.common.logout);
  router.post('/user/savePasswordModify', user.common.savePasswordModify);

  // 消息通知
  router.post('/notice/readAll', notice.readAll);
  router.get('/notice/overview', notice.overview);
  router.post('/notice/query', notice.query);

  /**
   * 管理端-管理员
   */

  router.post('/user/merchant/saveNew', user.merchant.saveNew);
  router.post('/user/merchant/saveModify', user.merchant.saveModify);
  router.post('/user/merchant/query', user.merchant.query);
  router.get('/user/merchant/get', user.merchant.get);

  /**
   * 管理端-商家
   */

  // 订货单
  router.post('/bill/order/query', goodsOrder.query);
  router.get('/bill/order/get', goodsOrder.get);
  router.post('/bill/order/dispatch', goodsOrder.dispatch);
  router.post('/bill/order/complete', goodsOrder.complete);

  // 商品
  router.post('/goods/saveNew', goods.saveNew);
  router.post('/goods/saveModify', goods.saveModify);
  router.post('/goods/up', goods.up);
  router.post('/goods/down', goods.down);
  router.post('/goods/query', goods.query);
  router.get('/goods/get', goods.get);

  // 商品类别
  router.post('/goodsCategory/saveNew', goodsCategory.saveNew);
  router.post('/goodsCategory/saveModify', goodsCategory.saveModify);
  router.post('/goodsCategory/remove', goodsCategory.remove);
  router.post('/goodsCategory/query', goodsCategory.query);
  router.get('/goodsCategory/getDropdownList', goodsCategory.getDropdownList);
  router.get('/goodsCategory/get', goodsCategory.get);

  // 运费方案
  router.post('/freightPlan/saveNew', freightPlan.saveNew);
  router.post('/freightPlan/saveModify', freightPlan.saveModify);
  router.post('/freightPlan/remove', freightPlan.remove);
  router.post('/freightPlan/query', freightPlan.query);
  router.get('/freightPlan/get', freightPlan.get);

  // 送货时间
  router.post('/deliveryTimeType/saveNew', deliveryTimeType.saveNew);
  router.post('/deliveryTimeType/saveModify', deliveryTimeType.saveModify);
  router.post('/deliveryTimeType/remove', deliveryTimeType.remove);
  router.post('/deliveryTimeType/query', deliveryTimeType.query);
  router.get('/deliveryTimeType/get', deliveryTimeType.get);

  // 统计
  router.get('/statistics/order/getForDay', statistics.getForDay);
  router.get('/statistics/order/getForWeek', statistics.getForWeek);

  // utils
  router.post('/utils/upload', utils.upload.upload);

  // socket.io
  io.of('/').route('notice', io.controller.notice.ping);
};
