module sgame {
    export class Hole {
    public index:int = new int(0);
	public show:string = "";
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.index);
		Msg.encode(ba, this.show);
		
            return ba;
        }
                        public decode(ba:egret.ByteArray):void{
            this.index = Msg.decode(ba, "int");
		this.show = Msg.decode(ba, "string");
		
        }
            }
}