module sgame {
    export class CurrentRoundS2C {
    public __id:string = "MajiangCurrentRoundS2C";
	public round:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.round = Msg.decode(ba, "int");
		
        }
            }
}