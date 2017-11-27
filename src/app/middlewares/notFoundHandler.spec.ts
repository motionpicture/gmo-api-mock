// tslint:disable:no-implicit-dependencies

/**
 * not foundハンドラーミドルウェアテスト
 * @ignore
 */

import * as assert from 'assert';
import * as sinon from 'sinon';

import * as notFoundHandler from './notFoundHandler';

let sandbox: sinon.SinonSandbox;

describe('notFoundHandler.default()', () => {
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('レスポンスが出力されるはず', async () => {
        const params = {
            req: {},
            res: {
                status: () => params.res,
                send: () => params.res
            }
        };

        sandbox.mock(params.res).expects('send').once();

        const result = await notFoundHandler.default(<any>params.req, <any>params.res);
        assert.equal(result, undefined);
        sandbox.verify();
    });
});
