/**
 * Created by DELL on 2018/1/12.
 */
module gt{
    export class MSG{
        static  CG_LOGIN                    = 1;
        static GC_LOGIN					    = 2;
        static CG_RECONNECT				    = 10;
        static CG_LOGIN_SERVER			    = 11;
        static GC_LOGIN_SERVER			    = 12;
        static GC_ROOM_CARD				= 13;
        static GC_MARQUEE				    = 14;
        static CG_HEARTBEAT				= 15;
        static GC_HEARTBEAT				= 16;
        static CG_REQUEST_NOTICE		    = 17;
        static GC_REQUEST_NOTICE		    = 18;
        static CG_CREATE_ROOM			    = 20  ;//// Req:创建房间
        static GC_CREATE_ROOM			    = 21  ;//Rsp:创建房间
        static CG_JOIN_ROOM				= 22;
        static GC_JOIN_ROOM				= 23;
        static CG_QUIT_ROOM				= 24;
        static GC_QUIT_ROOM				= 25;
        static CG_DISMISS_ROOM			    = 26;
        static GC_DISMISS_ROOM			    = 27;
        static CG_APPLY_DISMISS			= 28;
        static GC_ENTER_ROOM			    = 30;
        static GC_ADD_PLAYER			    = 31;
        static GC_REMOVE_PLAYER			= 32;
        static GC_SYNC_ROOM_STATE		    = 35;
        static CG_READY					= 36;
        static GC_READY					= 37;
        static GC_OFF_LINE_STATE		    = 40 ;//--离线在线标示
        static GC_ROUND_STATE			    = 41;
        static GC_START_GAME			    = 50;
        static GC_TURN_SHOW_MJTILE		    = 51 ;//-- 通知玩家出牌
        static CG_SHOW_MJTILE			    = 52;
        static GC_SYNC_SHOW_MJTILE		    = 53;//-- 广播玩家出牌
        static GC_MAKE_DECISION			= 54; //-- 同志玩家决策
        static CG_PLAYER_DECISION		    = 55;
        static GC_SYNC_MAKE_DECISION	    = 56 ;//-- 广播决策结果
        static CG_CHAT_MSG				    = 57;
        static GC_CHAT_MSG				    = 58;
        static GC_ROUND_REPORT			    = 60;
        static CG_REPAIR_FLOWER			= 63;
        static GC_REPAIR_FLOWER			= 64;
        // gt.static GC_START_DECISION		= 65;
        // gt.static CG_START_PLAYER_DECISION	= 66;
        // gt.static GC_SYNC_START_PLAYER_DECISION= 67;
        static GC_APPLIQU_START			= 65;
        static CG_APPLIQU_END			    = 66 ;//-- 补花确认
        static GC_OPEN_GOLD 			    = 67;
        static GC_SYNC_BAR_TWOCARD         = 68;
        static CG_SYNC_HAIDI			    = 69;
        static CG_CHOOSE_HAIDI			    = 70;
        static CG_TURN_HAIDI			    = 71;
        static GC_FINAL_REPORT			    = 80;
        static CG_HISTORY_RECORD		    = 90;
        static GC_HISTORY_RECORD		    = 91;
        static CG_REPLAY				    = 92;
        static GC_REPLAY				    = 93;
        static CG_SHARE_REPLAY			    = 105;
        static GC_SHARE_REPLAY			    = 106;
        static CG_SHARE_BTN				= 107;
        static GC_SHARE_BTN				= 108 ;
        static GC_GET_VIDEO				= 109 ;
        static GC_CHARGE_DIAMOND           = 112 ;
        static GC_PURCHASE                 = 113 ;
        static GC_PLAYER_TYPE              = 114 ;
        static CG_COUPONS_EXCHANGE         = 120   ; //点击兑换礼券
        static GC_COUPONS_EXCHANGE         = 121 ;
        static CG_COUPONS_EXCHANGE_RECORD  = 122 ; // --查看兑换礼券列表
        static GC_COUPONS_EXCHANGE_RECORD  = 123 ;
        static CG_GIFT_EXCHANGE            = 124 ;//  --礼券兑换状态是否成功
        static GC_GIFT_EXCHANGE            = 125 ;

        static GC_GANG_AFTER_CHI_PENG      = 117  ;//--长沙麻将杠了之后没有人胡可以吃和碰通知
        static CG_GANG_MAKE_DECISION       = 118  ;//--长沙麻将杠了之后没有人胡可以吃和碰通知后的决策

        static CG_GET_TASK_LIST   		    = 126  ;//--获取任务列表请求

        static GC_GET_TASK_LIST    		= 127  ;//--获取任务列表回复

        static CG_FINISH_TASK   		    = 128  ;//--完成任务请求
        static GC_FINISH_TASK    		    = 129  ;//--完成任务回复

        static CG_FIND_INVITE_PLAYER   	= 130  ;//--获取玩家信息
        static GC_FIND_INVITE_PLAYER       = 131  ;//--返回玩家信息
        static CG_GET_INVITE_INFO   	    = 132  ;//--获取邀请信息
        static GC_GET_INVITE_INFO    	    = 133  ;//--返回邀请信息
        static CG_INVITE_OK   			    = 134  ;//--绑定邀请者
        static GC_INVITE_OK    			= 135  ;//--绑定邀请者结果

        static CG_SHARE_GAME    		    = 136  ;//--玩家通过微信分享了游戏

        static CG_LUCKY_DRAW_NUM           = 137  ;//-- 请求玩家抽奖次数
        static GC_LUCKY_DRAW_NUM           = 138  ;//-- 服务器推送玩家抽奖次数

        static GC_ZHANIAO				    = 72  ;//-- 扎鸟

        // -- 转盘抽奖相关
        static GC_LOTTERY				    = 94 ;//  -- 服务器推送活动相关信息
        static CG_GET_GETLOTTERY		    = 95  ;// -- 玩家请求抽奖
        static GC_RET_GETLOTTERY		    = 96  ;// -- 服务器返回此次抽奖结果
        static CG_SAVE_PHONENUM			= 97 ;//  -- 客户端请求写入电话号码
        static GC_SAVE_PHONENUM			= 98  ;// -- 服务器返回写入电话号码结果
        static CG_GET_GETLOTTERYRESULT	    = 99  ;// -- 玩家请求自己的抽奖结果
        static GC_GET_GETLOTTERYRESULT	    = 100  ;//-- 服务器返回玩家抽奖结果
        static GC_IS_ACTIVITIES			= 101  ;//-- 服务器推送是否有活动
        static CG_GET_ACTIVITIES		    = 102  ;//-- 客户端请求活动信息 返回94号指令

        static CG_HISTORY_ONE              = 110 ;// -- 客户端请求单把(8局)数据
        static GC_HISTORY_ONE              = 111 ;// -- 服务器推送单把数据

        static CG_UPDATE_SCORE             = 115  ;//-- 客户端请求分数
        static GC_UPDATE_SCORE             = 116  ;//-- 服务器返回分数
        static CG_SIGNIN                   = 145  ;// --客户端签到
        static GC_SIGNIN                   = 146 ;//  --服务器返回签到

        static GC_TIPS                     = 170  ;//-- 服务器统一推送所有提示协议

        static CG_VIEW_SPORT               = 171 ;// -- 请求查看比赛场内容
        static GC_VIEW_SPORT               = 172  ;//-- 返回查看比赛场内容
        static CG_OPTJOIN_SPORT            = 173 ;// -- 请求加入或退出比赛
        static GC_OPTJOIN_SPORT            = 174  ;//-- 返回加入或退出比赛
        static CG_SPORT_QUIT               = 11030 ;// -- 请求退出比赛场
        static GC_SPORT_QUIT               = 175 ;// -- 返回退出比赛场
        static GC_SPORT_TIPS               = 176 ;// -- 返回比赛各阶段提示信息
        static CG_SPORT_RECORD_INFO        = 177  ;//-- 请求比赛记录信息相关操作
        static GC_SPORT_RECORD_INFO        = 178  ;//-- 返回比赛记录信息相关操作
        static CG_SPORT_RECORD_INFO_OPT    = 179  ;//-- 请求比赛记录信息
        static GC_SPORT_RECORD_INFO_OPT    = 180  ;//-- 返回比赛记录信息
        static GC_TRUSTEESHIP              = 191  ;//-- 请求手机验证码
        static GC_TRUSTEESHIP_CANCEL       = 193  ;//-- 返回取消托管
        static GC_SPORT_END                = 11031  ;//-- 返回比赛结果
        static CG_PHONE_NUMBER_VERIFY      = 183 ;// -- 请求校验手机号
        static GC_PHONE_NUMBER_VERIFY      = 184  ;//-- 请求校验手机号
        static CG_GET_PHONE_VERIFY_CODE    = 181  ;//-- 请求手机验证码
        static GC_GET_PHONE_VERIFY_CODE    = 182  ;///-- 返回手机验证码
        static GC_ATTACK_MANAGED           = 187  ;//--托管状态产生和取消托管都会发
        static CG_TRUSTEESHIP              = 188  ;//-- 请求取消托管
        static GC_IN_SPORT                 = 189  ;//--告诉客户端正在比赛过程中不能加入，请等等，或取消加入比赛场（可能在加入过程中异常）
        SPORTNROADCAST              = 190  ;//-- --监听宝牌
        static GC_GET_TING_MJBAOCARD       = 200  ;//--听完后监听的宝牌
        static GC_GET_HUNCARD              = 201  ;//-- 返回混牌
        static GC_DAIKAI                   = 203  ;//--返回代开是否成功
        static CG_GET_DAIKAI               = 204  ;//--请求代开房间列表
        static GC_GET_DAIKAI_LIST          = 205  ;//--返回代开列表
        static CG_CLOSE_DAIKAIROOM         = 206  ;//--关闭代开房间
        static GC_CLOSE_DAIKAIROOM         = 207  ;//--返回关闭房间结果
        static GC_SYNCHRO_DAIKAI           = 208  ;//--同步代开列表
        static GC_IPWARNING                = 209  ;//--ip 警告
        static CG_GPS                      = 210  ;//-- 发送位置
        static GC_GPS               	    = 211  ;//--获取位置
        static GC_GLOURY_SCORE		        = 212 //--更新荣耀积分
    }
}


