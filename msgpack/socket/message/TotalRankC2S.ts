module sgame {
    export class TotalRankC2S {
    public __id:string = "MouseTotalRankC2S";
	public start:int = new int(0);
	public count:int = new int(0);
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		Msg.encode(ba, this.start);
		Msg.encode(ba, this.count);
		
            return ba;
        }
                
    }
}