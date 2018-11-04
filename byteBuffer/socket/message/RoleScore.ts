module sgame {
    export class RoleScore {
    public pos:int = new int(0);
	public totalScore:int = new int(0);
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.pos);
		Msg.encode(ba, this.totalScore);
		
            return ba;
        }
                        public decode(ba:egret.ByteArray):void{
            this.pos = Msg.decode(ba, "int");
		this.totalScore = Msg.decode(ba, "int");
		
        }
            }
}