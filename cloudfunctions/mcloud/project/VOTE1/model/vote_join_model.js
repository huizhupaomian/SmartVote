/**
 * Notes: 投票明细
 * Ver : CCMiniCloud Framework 2.6.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 * Date: 2022-07-13 19:20:00 
 */


const BaseProjectModel = require('./base_project_model.js');

class VoteJoinModel extends BaseProjectModel {

}

// 集合名
VoteJoinModel.CL = BaseProjectModel.C('vote_join');

VoteJoinModel.DB_STRUCTURE = {
	_pid: 'string|true',
	VOTE_JOIN_ID: 'string|true',

	VOTE_JOIN_USER_ID: 'string|true|comment=用户ID',
	VOTE_JOIN_VOTE_ID: 'string|true|comment=投票PK',
	VOTE_JOIN_IDX: 'int|true|comment=投票项目索引',
	VOTE_JOIN_DAY: 'string|true|comment=投票日期',

	VOTE_JOIN_VOTE_TITLE: 'string|true|comment=投票项目冗余',
	VOTE_JOIN_ITEM_LABEL: 'string|true|comment=投票选项冗余',

	VOTE_JOIN_ADD_TIME: 'int|true',
	VOTE_JOIN_EDIT_TIME: 'int|true',
	VOTE_JOIN_ADD_IP: 'string|false',
	VOTE_JOIN_EDIT_IP: 'string|false',
};

// 字段前缀
VoteJoinModel.FIELD_PREFIX = "VOTE_JOIN_";





module.exports = VoteJoinModel;