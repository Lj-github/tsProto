// TypeScript file

class SocketClient extends egret.EventDispatcher{
    public  test = 5;
    public   stsa = 6;
    public msgInt :MessageInit;
    public sendMsgCache = [];//消息缓冲表
    public sendingBuffer = "";
    public recvingBuffer = "";
    private _socket :egret.WebSocket;
    private _socketBytes: egret.ByteArray;
    private _bytesBuffer: egret.ByteArray;
    private _len: number;
    private schedule:any;
    constructor(){
        super()
        this.msgInt = new MessageInit();
        //this.schedule = setInterval(this.update,0)

    };
    public connect(ip: string, port: number): void {
        this._socket.connect(ip, port);
        this.addEvents();
    }
    private addEvents(){
        this._socket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this._socket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this._socket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this._socket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    }
    /**
     * 接受消息
     */
    public onReceiveMessage(){
        this.recvingBuffer = this._socket.readUTF();
        this.receive();
    }
    /**
     * 连接
     */
    private onSocketOpen(): void {
        this.dispatchEventWith(egret.Event.CONNECT);
    }
    private onSocketError(): void {
        this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
        //发送失败

    }
    private onSocketClose(): void {
        this.dispatchEventWith(egret.Event.CLOSE);
    }
    //初始化
    public initSocketBuffer()
    {
        this.sendMsgCache = [];
        this.sendingBuffer = "";
       // this.remainSendSize = 0;
       //// this.msgHeadSize = 12;
        //-- 接收消息
       // this.recvingBuffer = "";
       // this.remainRecvSize = this.msgHeadSize //--剩余多少数据没有接受完毕,2:头部字节数
       // this.recvState = "Head";
    }//
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
         //   let msgBody = Msg.getMsgInstance(msgID + "");
           // if (!msgBody) return;
           // msgBody.decode(this._socketBytes);

            this._socketBytes.clear();
            // Api.Log.debug(MsgModel.msgDic[msgID] + ":" + JSON.stringify(msgBody));
            //MessageCenter.getInstance().callMsgListener(msgBody);
        }
    }
    public send(){
        if (this.sendMsgCache.length<=0){
            return true
        }
        if ( this._socket.connected){
            try {
                let msgToSend = this.sendMsgCache[0];
                this._socket.writeUTF(msgToSend);
            }catch (ex)
            {
                console.log(ex.Message);
            }
        }
    }

    /**
     *
     * 消息分发结构
     */
    public receive(){



    }
    public sendMsg(msg: any): void {
        //let bytes = msg.encode();
        //bytes.writeInt(0);
        // -- 打包成messagepack格式
        let msgPackData = MsgPackCenter.encode(msg,true);
        let msgLength = msgPackData.length;
        let len = this.tsToCByShort(msgLength);

        let curTime  = new Date().getTime();
        gt.log("curTime = " + curTime);
        let time = this.tsToCByInt(curTime);
        gt.log("time int = " + time);
        let msgId = this.tsToCByInt(msg.m_msgId * ((curTime % 10000) + 1));
        gt.log("msgId by int = "+ msgId);
        let checksum = this.getCheckSum(time + msgId, msgLength, msgPackData);
        let msgToSend = len + checksum + time + msgId + msgPackData;
        //-- 放入到消息缓冲
        this.sendMsgCache.push(msgToSend);
    }

    private tsToCByInt(value){
        let lowByte1 = String.fromCharCode(Math.floor(value / (256 * 256 * 256)))
        let lowByte2 = String.fromCharCode(Math.floor(value / (256 * 256) % 256))
        let lowByte3 = String.fromCharCode(Math.floor(value / 256) % 256)
        let lowByte4 = String.fromCharCode(value % 256)
        return lowByte4 + lowByte3 +lowByte2 + lowByte1
    }
    private  tsToCByShort(value){
        return String.fromCharCode(value % 256) +String.fromCharCode(Math.floor(value / 256))
    }


    private getCheckSum(time:string, msgLength, msgPackData){
        let crc = null;
        let len = time.length + msgLength;
        if (len < 8 ){
            crc = this.CRC(time + msgPackData, len)
        }else{
            crc = this.CRC(time + msgPackData, 8)
        }
        return this.tsToCByShort(crc)

    }

    public CRC(data, length:number){
        let sum = 65535;
        for(let i = 1;i <= length ;i++){
            let d = String.fromCharCode(data, i);    //-- get i-th element, like data[i] in C
            sum = this.ByteCRC(sum, d);
        }
        return sum

    }

    /**
     * crc校验
     * @param sumA
     * @param data
     * @returns {number}
     * @constructor
     */

   private ByteCRC(sumA, data){
       let sum = Bit._xor(sumA, data)
       for ( var i = 0; i<=3 ;i++ ){
           if (Bit._and(sum, 1) == 0)
           {
               sum = sum / 2
           }else{
               sum = Bit._xor((sum / 2), 0x70B1);
           }
       }
       return sum
   }

    public stringToByte(str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for(var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if(c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if(c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if(c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            } else {
                bytes.push(c & 0xFF);
            }
        }
        return bytes;


}


    public byteToString(arr) {
      /*  if(typeof arr === 'string') {
            return arr;
        }
        var str = '',
            _arr = arr;
        for(var i = 0; i < _arr.length; i++) {
            var one = _arr[i].toString(2),
                v = one.match(/^1+?(?=0)/);
            if(v && one.length == 8) {
                var bytesLength = v[0].length;
                var store = _arr[i].toString(2).slice(7 - bytesLength);
                for(var st = 1; st < bytesLength; st++) {
                    store += _arr[st + i].toString(2).slice(2);
                }
                str += String.fromCharCode(parseInt(store, 2));
                i += bytesLength - 1;
            } else {
                str += String.fromCharCode(_arr[i]);
            }
        }
        return str;*/
    }

    public update(){
        this.send()


    }
}

