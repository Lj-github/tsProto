module sgame {
    export class PlayCardC2S {
    public __id:string = "MajiangPlayCardC2S";
	public card:int = new int(0);
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		Msg.encode(ba, this.card);
		
            return ba;
        }
                
    }
}