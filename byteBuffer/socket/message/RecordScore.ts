module sgame {
    export class RecordScore {
    public roleId:string = "";
	public name:string = "";
	public score:int = new int(0);
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.roleId);
		Msg.encode(ba, this.name);
		Msg.encode(ba, this.score);
		
            return ba;
        }
                        public decode(ba:egret.ByteArray):void{
            this.roleId = Msg.decode(ba, "string");
		this.name = Msg.decode(ba, "string");
		this.score = Msg.decode(ba, "int");
		
        }
            }
}