module sgame {
    export class StartS2C {
    public __id:string = "MajiangStartS2C";
	public cards:any = [];
	public zhuang:int = new int(0);
	public anyCard:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.cards = Msg.decode(ba, "int", ba.readShort());
		this.zhuang = Msg.decode(ba, "int");
		this.anyCard = Msg.decode(ba, "int");
		
        }
            }
}