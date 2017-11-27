"use strict";
/**
 * 404ハンドラーミドルウェア
 * @module middlewares.notFoundHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("http-status");
const querystring = require("querystring");
exports.default = (__, res) => {
    const result = {
        ErrCode: 'E91',
        ErrInfo: 'E91099997'
    };
    res.status(http_status_1.NOT_FOUND).send(querystring.stringify(result));
};
