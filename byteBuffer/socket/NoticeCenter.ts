import NoticeS2C = sgame.NoticeS2C;
/**
 * Created by husong on 4/20/17.
 */
class NoticeCenter {
    private static _instance: NoticeCenter;

    public static getInstance(): NoticeCenter {
        if (!NoticeCenter._instance) {
            NoticeCenter._instance = new NoticeCenter()
        }
        return NoticeCenter._instance;
    }

    private noticeMap = {};

    constructor() {
        Api.MessageCenter.regMsgListener(NoticeS2C, this.onNotice, this);
    }

    private onNotice(msg: NoticeS2C) {
        let callbacks = this.noticeMap[msg.id.num];
        if (callbacks) {
            for (let i = 0; i < callbacks.length; i++) {
                let callback = callbacks[i];
                callback();
                if (callback.once === true) {
                    this.removeByIndex(msg.id.num, i);
                    i--;
                }
            }
        }
    }

    public once(id: Notice, callback) {
        callback.once = true;
        this.register(id, callback);
    }

    public register(id: Notice, callback) {
        if (!this.noticeMap[id]) {
            this.noticeMap[id] = [];
        }
        this.noticeMap[id].push(callback);
    }

    public removeByIndex(id: Notice, index) {
        this.noticeMap[id].splice(index, 1);
        if (this.noticeMap[id].length === 0) {
            delete this.noticeMap[id];
        }
    }

    public remove(id: Notice, callback) {
        if (this.noticeMap[id]) {
            let index = this.noticeMap[id].indexOf(callback);
            if (index > -1) {
                this.removeByIndex(id, index);
            }
        }

    }
}

enum Notice {
    AUTO_JOIN_ROOM_FAIL = 1,
    NOT_VIP = 2
}