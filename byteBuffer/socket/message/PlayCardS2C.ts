module sgame {
    export class PlayCardS2C {
    public __id:string = "MajiangPlayCardS2C";
	public pos:int = new int(0);
	public card:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.pos = Msg.decode(ba, "int");
		this.card = Msg.decode(ba, "int");
		
        }
            }
}