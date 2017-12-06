/**
 * バリデーターミドルウェア
 * リクエストのパラメータ(query strings or body parameters)に対するバリデーション
 * @module middlewares.validator
 */

import * as createDebug from 'debug';
import { NextFunction, Request, Response } from 'express';
import { } from 'express-validator';
import { OK } from 'http-status';
import * as querystring from 'querystring';

const debug = createDebug('gmo-api-mock:middlewares:validator');

export default async (req: Request, res: Response, next: NextFunction) => {
    const validatorResult = await req.getValidationResult();
    // tslint:disable-next-line:no-single-line-block-comment
    /* istanbul ignore next */
    if (!validatorResult.isEmpty()) {
        // const errors = validatorResult.array().map((mappedRrror) => {
        //     return new sskts.factory.errors.Argument(mappedRrror.param, mappedRrror.msg);
        // });
        debug('validation result not empty...', validatorResult.array());

        const result = {
            ErrCode: 'E91',
            ErrInfo: 'E91099997'
        };
        res.status(OK).send(querystring.stringify(result));
    } else {
        next();
    }
};
