module sgame {
    export class RecordC2S {
    public __id:string = "MajiangRecordC2S";
	public index:int = new int(0);
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		Msg.encode(ba, this.index);
		
            return ba;
        }
                
    }
}