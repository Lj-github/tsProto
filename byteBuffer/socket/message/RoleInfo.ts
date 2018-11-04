module sgame {
    export class RoleInfo {
    public account:string = "";
	public name:string = "";
	public headimgurl:string = "";
	public pos:int = new int(0);
	public ipAddress:string = "";
	public score:int = new int(0);
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.account);
		Msg.encode(ba, this.name);
		Msg.encode(ba, this.headimgurl);
		Msg.encode(ba, this.pos);
		Msg.encode(ba, this.ipAddress);
		Msg.encode(ba, this.score);
		
            return ba;
        }
                        public decode(ba:egret.ByteArray):void{
            this.account = Msg.decode(ba, "string");
		this.name = Msg.decode(ba, "string");
		this.headimgurl = Msg.decode(ba, "string");
		this.pos = Msg.decode(ba, "int");
		this.ipAddress = Msg.decode(ba, "string");
		this.score = Msg.decode(ba, "int");
		
        }
            }
}