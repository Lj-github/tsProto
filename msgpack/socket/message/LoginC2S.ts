module sgame {
    export class LoginC2S {
    public __id:string = "MouseLoginC2S";
	public platform:string = "";
	public token:string = "";
	public account:string = "";
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		Msg.encode(ba, this.platform);
		Msg.encode(ba, this.token);
		Msg.encode(ba, this.account);
		
            return ba;
        }
                
    }
}