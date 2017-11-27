/**
 * カード会員ルーター
 * @ignore
 */

import { Router } from 'express';
import { OK } from 'http-status';
import * as querystring from 'querystring';

const memberRouter = Router();

/**
 * 会員登録
 */
memberRouter.post(
    '/SaveMember.idPass',
    (__, res) => {
        const result = {
            MemberID: '1511771942244'
        };
        res.status(OK).send(querystring.stringify(result));
    }
);

/**
 * 会員更新
 */
memberRouter.post(
    '/UpdateMember.idPass',
    (__, res) => {
        const result = {
            MemberID: '1511771942244'
        };
        res.status(OK).send(querystring.stringify(result));
    }
);

/**
 * 会員削除
 */
memberRouter.post(
    '/DeleteMember.idPass',
    (__, res) => {
        const result = {
            MemberID: '1511771942244'
        };
        res.status(OK).send(querystring.stringify(result));
    }
);

/**
 * 会員参照
 */
memberRouter.post(
    '/SearchMember.idPass',
    (__, res) => {
        const result = {
            MemberID: '1511772007986',
            MemberName: 'test',
            DeleteFlag: '0'
        };
        res.status(OK).send(querystring.stringify(result));
    }
);

/**
 * カード登録・更新
 */
memberRouter.post(
    '/SaveCard.idPass',
    (__, res) => {
        const result = {
            CardSeq: '0',
            CardNo: '************* 111',
            Forward: '2a99662'
        };
        res.status(OK).send(querystring.stringify(result));
    }
);

/**
 * カード削除
 */
memberRouter.post(
    '/DeleteCard.idPass',
    (__, res) => {
        const result = {
            CardSeq: '0'
        };
        res.status(OK).send(querystring.stringify(result));
    }
);

/**
 * カード参照
 */
memberRouter.post(
    '/SearchCard.idPass',
    (__, res) => {
        const result = {
            CardSeq: '0',
            DefaultFlag: '0',
            CardName: '',
            CardNo: '*************111',
            Expire: '2012',
            HolderName: '',
            DeleteFlag: '0'
        };
        res.status(OK).send(querystring.stringify(result));
    }
);

export default memberRouter;
