import { Router } from 'express'
import * as tariffHandler from './tariff.handler'

export function init(api){
  const router = new Router();
  router.get('/get', tariffHandler.getTariff);
  api.use('/tariff', router);
}