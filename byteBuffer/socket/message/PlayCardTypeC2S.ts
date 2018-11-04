module sgame {
    export class PlayCardTypeC2S {
    public __id:string = "MajiangPlayCardTypeC2S";
	public type:int = new int(0);
	public startValue:int = new int(0);
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		Msg.encode(ba, this.type);
		Msg.encode(ba, this.startValue);
		
            return ba;
        }
                
    }
}