/**
 * Created by Saco on 16/3/16.
 */
module sgame {
    export class MessageCenter {
        private _msgListener:any;
        private static _instance:MessageCenter;
        public static getInstance():MessageCenter {
            if (!MessageCenter._instance) {
                MessageCenter._instance = new MessageCenter()
            }
            return MessageCenter._instance;
        }


        public constructor() {
            this._msgListener = Object.create(null);
        }

        public regMsgListener(msg:any, callback:Function, callbackObj:any):void {
            var msgID = MsgModel.msgDicRev[msg.prototype.__class__];
            if (!this._msgListener[msgID])
                this._msgListener[msgID] = [];
            if (!this.hasEventListener(msgID, callback, callbackObj))
                this._msgListener[msgID].push({"callObj": callbackObj, "callback": callback});
        }

        public removeMsgListener(msg:any, callback:Function, callbackObj:any):void {
            var msgID = MsgModel.msgDicRev[msg.prototype.__class__];
            if (!this._msgListener[msgID]) return;
            for (var i:number = 0; i < this._msgListener[msgID].length; i++) {
                if (this._msgListener[msgID][i].callback == callback && this._msgListener[msgID][i].callObj == callbackObj) {
                    this._msgListener[msgID].splice(i, 1);
                    return;
                }
            }
        }

        public removeAllListeners(msg:any) {
            var msgID = MsgModel.msgDicRev[msg.prototype.__class__];
            delete this._msgListener[msgID];
        }

        public callMsgListener(msg:any):void {
            if (this._msgListener[msg.__id]) {
                this._msgListener[msg.__id].map((listener)=> {
                    listener.callback.call(listener.callObj, msg);
                }, this);
            }
        }

        private hasEventListener(msgID:number, call:Function, thisObj:any):Boolean {
            if (!this._msgListener[msgID])
                return false;
            for (var i:number = 0; i < this._msgListener[msgID].length; i++) {
                if (this._msgListener[msgID][i].callback == call && this._msgListener[msgID][i].callObj == thisObj)
                    return true;
            }
            return false;
        }
    }
}