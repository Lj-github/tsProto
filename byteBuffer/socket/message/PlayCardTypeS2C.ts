module sgame {
    export class PlayCardTypeS2C {
    public __id:string = "MajiangPlayCardTypeS2C";
	public pos:int = new int(0);
	public type:int = new int(0);
	public startValue:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.pos = Msg.decode(ba, "int");
		this.type = Msg.decode(ba, "int");
		this.startValue = Msg.decode(ba, "int");
		
        }
            }
}