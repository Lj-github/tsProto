module sgame {
    export class PlayCardUpdateS2C {
    public __id:string = "MajiangPlayCardUpdateS2C";
	public pos:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.pos = Msg.decode(ba, "int");
		
        }
            }
}