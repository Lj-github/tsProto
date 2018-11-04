module sgame {
    export class Record {
    public date:int = new int(0);
	public scoreInfo:RecordScore[] = [];
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.date);
		Msg.encode(ba, this.scoreInfo);
		
            return ba;
        }
                        public decode(ba:egret.ByteArray):void{
            this.date = Msg.decode(ba, "int");
		this.scoreInfo = Msg.decode(ba, "RecordScore", ba.readShort());
		
        }
            }
}