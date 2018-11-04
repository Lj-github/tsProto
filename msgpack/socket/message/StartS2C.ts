module sgame {
    export class StartS2C {
    public __id:string = "MouseStartS2C";
	public maxRound:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.maxRound = Msg.decode(ba, "int");
		
        }
            }
}