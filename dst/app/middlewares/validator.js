"use strict";
/**
 * バリデーターミドルウェア
 * リクエストのパラメータ(query strings or body parameters)に対するバリデーション
 * @module middlewares.validator
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
const createDebug = require("debug");
const http_status_1 = require("http-status");
const querystring = require("querystring");
const debug = createDebug('gmo-api-mock:middlewares:validator');
exports.default = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const validatorResult = yield req.getValidationResult();
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
        res.status(http_status_1.OK).send(querystring.stringify(result));
    }
    else {
        next();
    }
});
