/**
 * 取引ルーター
 * @ignore
 */

import { Router } from 'express';
import { OK } from 'http-status';
import * as querystring from 'querystring';

const tradeRouter = Router();

/**
 * 取引状態参照
 */
tradeRouter.post(
    '/SearchTrade.idPass',
    async (__, res, next) => {
        try {
            const result = {
                OrderID: '1511764732893',
                Status: 'SALES',
                ProcessDate: '20171127153855',
                JobCd: 'SALES',
                AccessID: '4b59530d25ccdf51cb3795a86fd68097',
                AccessPass: '4df804a0602ab51229fae24826c7ed3e',
                ItemCode: '0000990',
                Amount: '1800',
                Tax: '0',
                SiteID: '',
                MemberID: '',
                CardNo: '************1111',
                Expire: '2025',
                Method: '1',
                PayTimes: '',
                Forward: '2a99662',
                TranID: '1711271538111111111111872083',
                Approve: '8215424',
                ClientField1: '',
                ClientField2: '',
                ClientField3: ''
            };
            res.status(OK).send(querystring.stringify(result));
        } catch (error) {
            next(error);
        }
    }
);

export default tradeRouter;
