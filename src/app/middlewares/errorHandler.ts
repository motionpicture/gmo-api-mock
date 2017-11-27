/**
 * error handler
 * エラーハンドラーミドルウェア
 * @module middlewares.errorHandler
 */

import { NextFunction, Request, Response } from 'express';
// import { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND, TOO_MANY_REQUESTS } from 'http-status';

export default (err: any, __1: Request, __2: Response, next: NextFunction) => {
    next(err);
};
