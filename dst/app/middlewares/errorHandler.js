"use strict";
/**
 * error handler
 * エラーハンドラーミドルウェア
 * @module middlewares.errorHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
// import { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND, TOO_MANY_REQUESTS } from 'http-status';
exports.default = (err, __1, __2, next) => {
    next(err);
};
