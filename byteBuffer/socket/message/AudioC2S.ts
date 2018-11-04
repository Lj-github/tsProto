module sgame {
    export class AudioC2S {
    public __id:string = "MajiangAudioC2S";
	public id:string = "";
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		Msg.encode(ba, this.id);
		
            return ba;
        }
                
    }
}