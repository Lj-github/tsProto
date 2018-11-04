module sgame {
    export class RemainCardNumS2C {
    public __id:string = "MajiangRemainCardNumS2C";
	public cardNum:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.cardNum = Msg.decode(ba, "int");
		
        }
            }
}