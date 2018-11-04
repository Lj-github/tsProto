module sgame {
    export class StartReadyS2C {
    public __id:string = "MajiangStartReadyS2C";
	public pos:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.pos = Msg.decode(ba, "int");
		
        }
            }
}