/**
 * Created by Saco on 2015/2/8.
 */
module sgame {
    export class Msg {
        public static encode(ba:egret.ByteArray, field:any, arrPara?) {
            if (field instanceof byte) {
                ba.writeByte(field.num);
            } else if (field instanceof int) {
                ba.writeInt(field.num);
            } else if (field instanceof int64) {
                Msg.encodeInt64(ba, field);
            } else if (field instanceof short) {
                ba.writeShort(field.num);
            } else if (typeof field == "string") {
                ba.writeUTF(field);
            } else if (typeof field == "boolean") {
                ba.writeBoolean(field);
            } else if (field instanceof Array) {
                Msg.encodeArray(ba, field, arrPara);
            } else {
                var fieldBa:egret.ByteArray = field.encode();
                ba.writeBytes(fieldBa, 0, fieldBa.length);
            }
        }

        public static decode(ba, type:string, arrLength?:number):any {
            if (arrLength != null) {
                return Msg.decodeArray(ba, type, arrLength);
            } else {
                if (type == "short") {
                    return new short(ba.readShort());
                } else if (type == "int") {
                    return new int(ba.readInt());
                } else if (type == "int64") {
                    return Msg.decodeInt64(ba);
                } else if (type == "byte") {
                    return new byte(ba.readByte());
                } else if (type == "string") {
                    return ba.readUTF();
                } else if (type == "boolean") {
                    return ba.readBoolean();
                }
                var result = this.getMsgInstance("sgame." + type);
                result.decode(ba);
                return result;
            }
        }

        public static getMsgInstance(name:string):any {
            var msgName = MsgModel.msgDic[name];
            if (msgName == null) {
                let cls = egret.getDefinitionByName(name);
                if (cls == null) {
                    console.log("message [" + name + "] not defined!!");
                    return null;
                } else {
                    return new cls();
                }
            } else {
                var cls = egret.getDefinitionByName(msgName);
                return new cls();
            }
        }

        public static decodeArray(ba:egret.ByteArray, type:any, len:number):any[] {
            var index:number = 0;
            var arr = [];
            while (index < len) {
                arr.push(Msg.decode(ba, type));
                ++index;
            }
            return arr;
        }

        public static encodeArray(ba:egret.ByteArray, arr:any[], arrPara?):void {
            if (arrPara == "short") {
                ba.writeShort(arr.length);
            } else {
                ba.writeByte(arr.length);
            }
            var len:number = arr.length;
            var index:number = 0;
            for (index; index < len; index++) {
                Msg.encode(ba, arr[index]);
            }
        }

        public static encodeInt64(ba:egret.ByteArray, num:int64):void {
            var tempBa:egret.ByteArray = new egret.ByteArray();
            if (num.sign) {
                tempBa.writeInt(~num.getHigh32());
                tempBa.writeUnsignedInt(~num.getLow32() + 1);
            } else {
                tempBa.writeInt(num.getHigh32());
                tempBa.writeUnsignedInt(num.getLow32());
            }
            if (ba.endian == egret.Endian.BIG_ENDIAN) {
                tempBa.position = 0;
                ba.writeBytes(tempBa);
            } else {
                tempBa.position = 7;
                for (var i = 7; i >= 0; i--) {
                    ba.writeBytes(tempBa, i, 1);
                }
            }
        }

        public static decodeInt64(ba:egret.ByteArray):int64 {
            if (ba.endian == egret.Endian.BIG_ENDIAN) {
                return new int64(ba.readUnsignedInt(), ba.readUnsignedInt());
            } else {
                var int = ba.readUnsignedInt();
                return new int64(ba.readUnsignedInt(), int);
            }
        }

        public static fillBinaryStr(str:string):string {
            while (str.length < 4) {
                str = "0" + str;
            }
            return str;
        }
    }
}

