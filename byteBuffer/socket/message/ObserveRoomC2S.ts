module sgame {
    export class ObserveRoomC2S {
    public __id:string = "MajiangObserveRoomC2S";
	public roomId:int = new int(0);
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		Msg.encode(ba, this.roomId);
		
            return ba;
        }
                
    }
}