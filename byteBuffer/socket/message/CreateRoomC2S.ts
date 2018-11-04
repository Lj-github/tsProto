module sgame {
    export class CreateRoomC2S {
    public __id:string = "MajiangCreateRoomC2S";
	public mode:int = new int(0);
	public rules:int[] = [];
	public num:int = new int(0);
	public isAnyCard:int = new int(0);
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		Msg.encode(ba, this.mode);
		Msg.encode(ba, this.rules);
		Msg.encode(ba, this.num);
		Msg.encode(ba, this.isAnyCard);
		
            return ba;
        }
                
    }
}