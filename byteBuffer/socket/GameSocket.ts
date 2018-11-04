/**
 * Created by Saco on 2016/2/25.
 */
module sgame {
    export class GameSocket extends egret.EventDispatcher {
        private _socket: egret.WebSocket;
        private _socketBytes: egret.ByteArray;
        private _bytesBuffer: egret.ByteArray;
        private _len: number;

        public constructor() {
            super();
            this.initSocket();
        }

        private initSocket(): void {
            this._socket = new egret.WebSocket();
            this._socket.type = egret.WebSocket.TYPE_BINARY;
            this._socketBytes = new egret.ByteArray();
            this._socketBytes.endian = egret.Endian.LITTLE_ENDIAN;
            this._bytesBuffer = new egret.ByteArray();
            this._bytesBuffer.endian = egret.Endian.LITTLE_ENDIAN;
        }

        public connect(ip: string, port: number): void {
            this._socket.connect(ip, port);
            this.addEvents();
        }

        public sendMsg(msg: any): void {
            console.log(msg);
            let bytes = msg.encode();
            bytes.writeInt(0);
            this._socket.writeBytes(bytes);
        }

        private addEvents() {
            this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
            this._socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
            this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        }

        private onReceiveMessage(): void {
            this._socket.readBytes(this._bytesBuffer);
            this.decodeMsg();
        }

        private onSocketOpen(): void {
            this.dispatchEventWith(egret.Event.CONNECT);
        }

        private onSocketError(): void {
            this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
        }

        private onSocketClose(): void {
            this.dispatchEventWith(egret.Event.CLOSE);
        }

        private decodeMsg(): void {
            if (this._len == null) {
                this._len = this._bytesBuffer.readInt();
            }
            if (this._bytesBuffer.bytesAvailable < this._len) {
                return;
            } else {
                this._bytesBuffer.readBytes(this._socketBytes, 0, this._len);
                if (this._bytesBuffer.bytesAvailable) {
                    let tempArr: egret.ByteArray = new egret.ByteArray();
                    this._bytesBuffer.readBytes(tempArr);
                    this._bytesBuffer.clear();
                    this._bytesBuffer = tempArr;
                } else {
                    this._bytesBuffer.clear();
                }
                this._len = null;

                let msgID = this._socketBytes.readUTF();
                let msgBody = Msg.getMsgInstance(msgID + "");
                if (!msgBody) return;
                msgBody.decode(this._socketBytes);
                this._socketBytes.clear();
                // Api.Log.debug(MsgModel.msgDic[msgID] + ":" + JSON.stringify(msgBody));
                console.log(JSON.stringify(msgBody));
                Api.MessageCenter.callMsgListener(msgBody);
            }
        }

        public disConnect() {
            this._socket.close();
        }
    }
}
