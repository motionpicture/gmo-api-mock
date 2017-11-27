/**
 * 決済ルーター
 * @ignore
 */

import { Router } from 'express';

import memberRouter from './payment/member';
import tradeRouter from './payment/trade';
import transactionRouter from './payment/transaction';

const paymentRouter = Router();

paymentRouter.use(
    memberRouter,
    tradeRouter,
    transactionRouter
);

export default paymentRouter;
