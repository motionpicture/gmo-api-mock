"use strict";
/**
 * 決済取引ルーター
 * @ignore
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares = require("@motionpicture/express-middleware");
const express_1 = require("express");
const http_status_1 = require("http-status");
const redis = require("ioredis");
const querystring = require("querystring");
const validator_1 = require("../../middlewares/validator");
const transactionRouter = express_1.Router();
// tslint:disable-next-line:no-magic-numbers
const AGGREGATION_UNIT_IN_SECONDS = 1;
// tslint:disable-next-line:no-magic-numbers
const THRESHOLD = 3;
/**
 * 決済トランザクションのレート制限ミドルウェア
 * @const
 */
const rateLimit4transaction = middlewares.rateLimit({
    redisClient: new redis({
        host: process.env.RATE_LIMIT_REDIS_HOST,
        // tslint:disable-next-line:no-magic-numbers
        port: parseInt(process.env.RATE_LIMIT_REDIS_PORT, 10),
        password: process.env.RATE_LIMIT_REDIS_KEY
    }),
    aggregationUnitInSeconds: AGGREGATION_UNIT_IN_SECONDS,
    threshold: THRESHOLD,
    // 制限超過時の動作をカスタマイズ
    limitExceededHandler: (__0, __1, res) => {
        res.setHeader('Retry-After', AGGREGATION_UNIT_IN_SECONDS);
        const result = {
            ErrCode: 'E92',
            ErrInfo: 'E92000001'
        };
        res.status(http_status_1.TOO_MANY_REQUESTS).send(querystring.stringify(result));
    },
    // スコープ生成ロジックをカスタマイズ
    scopeGenerator: (req) => `transaction.${req.body.ShopID}`
});
/**
 * 取引登録
 */
transactionRouter.post('/EntryTran.idPass', (req, __, next) => {
    req.checkBody('ShopID').notEmpty();
    next();
}, validator_1.default, rateLimit4transaction, (__, res) => __awaiter(this, void 0, void 0, function* () {
    const result = {
        AccessID: '5fbdad39a6067335152f847868b01ee9',
        AccessPass: 'e57d4aa4ea2d157283414ef572acf178'
    };
    res.status(http_status_1.OK).type('text/plain').send(querystring.stringify(result));
}));
/**
 * 決済実行
 */
transactionRouter.post('/ExecTran.idPass', rateLimit4transaction, (__, res) => __awaiter(this, void 0, void 0, function* () {
    const result = {
        ACS: '0',
        OrderID: '1511764732893',
        Forward: '2a99662',
        Method: '1',
        PayTimes: '',
        Approve: '8215424',
        TranID: '1711271538111111111111872083',
        TranDate: '20171127153854',
        CheckString: '8e92dc6d730a4c7c97882354a994fd76',
        ClientField1: '',
        ClientField2: '',
        ClientField3: ''
    };
    res.status(http_status_1.OK).send(querystring.stringify(result));
}));
/**
 * 決済変更
 */
transactionRouter.post('/AlterTran.idPass', (req, __, next) => {
    req.checkBody('ShopID').notEmpty();
    next();
}, validator_1.default, rateLimit4transaction, (__, res) => __awaiter(this, void 0, void 0, function* () {
    const result = {
        AccessID: '4b59530d25ccdf51cb3795a86fd68097',
        AccessPass: '4df804a0602ab51229fae24826c7ed3e',
        Forward: '2a99662',
        Approve: '8215424',
        TranID: '1711271538111111111111872083',
        TranDate: '20171127153855'
    };
    res.status(http_status_1.OK).send(querystring.stringify(result));
}));
/**
 * 金額変更
 */
transactionRouter.post('/ChangeTran.idPass', (req, __, next) => {
    req.checkBody('ShopID').notEmpty();
    next();
}, validator_1.default, rateLimit4transaction, (__, res) => __awaiter(this, void 0, void 0, function* () {
    const result = {
        AccessID: 'f9f867a630c2e5651a3888340cfea97a',
        AccessPass: '4cfcd63255040a6bfaf72a2590202f08',
        Forward: '2a99662',
        Approve: '8217746',
        TranID: '1711271635111111111111874301',
        TranDate: '20171127163500'
    };
    res.status(http_status_1.OK).send(querystring.stringify(result));
}));
exports.default = transactionRouter;
