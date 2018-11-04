module sgame {
    export class StartC2S {
    public __id:string = "MajiangStartC2S";
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		
            return ba;
        }
                
    }
}