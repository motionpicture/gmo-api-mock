// tslint:disable:no-implicit-dependencies

/**
 * バリデーションミドルウェアテスト
 * @ignore
 */

import * as assert from 'assert';
import * as sinon from 'sinon';

import * as validatorMiddleware from './validator';

let sandbox: sinon.SinonSandbox;

describe('validatorMiddleware.default()', () => {
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('バリエーションエラーがなければnextが呼ばれるはず', async () => {
        const validatorResult = {
            isEmpty: () => undefined
        };
        const params = {
            req: {
                getValidationResult: async () => validatorResult
            },
            res: {},
            next: () => undefined
        };

        sandbox.mock(validatorResult).expects('isEmpty').once().returns(true);
        sandbox.mock(params).expects('next').once().withExactArgs();

        const result = await validatorMiddleware.default(<any>params.req, <any>params.res, params.next);
        assert.equal(result, undefined);
        sandbox.verify();
    });

    it('バリエーションエラーがあればレスポンスが出力されるはず', async () => {
        const validatorResult = {
            isEmpty: () => undefined,
            array: () => [{ param: 'param', msg: 'msg' }]
        };
        const params = {
            req: {
                getValidationResult: async () => validatorResult
            },
            res: {
                status: () => params.res,
                send: () => params.res
            },
            next: () => undefined
        };

        sandbox.mock(validatorResult).expects('isEmpty').once().returns(false);
        sandbox.mock(params.res).expects('send').once();
        sandbox.mock(params).expects('next').never();

        const result = await validatorMiddleware.default(<any>params.req, <any>params.res, params.next);
        assert.equal(result, undefined);
        sandbox.verify();
    });
});
