"use strict";
/**
 * 決済ルーター
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const member_1 = require("./payment/member");
const trade_1 = require("./payment/trade");
const transaction_1 = require("./payment/transaction");
const paymentRouter = express_1.Router();
paymentRouter.use(member_1.default, trade_1.default, transaction_1.default);
exports.default = paymentRouter;
