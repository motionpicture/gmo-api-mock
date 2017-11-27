/**
 * 404ハンドラーミドルウェア
 * @module middlewares.notFoundHandler
 */

import { Request, Response } from 'express';
import { NOT_FOUND } from 'http-status';
import * as querystring from 'querystring';

export default (__: Request, res: Response) => {
    const result = {
        ErrCode: 'E91',
        ErrInfo: 'E91099997'
    };
    res.status(NOT_FOUND).send(querystring.stringify(result));
};
