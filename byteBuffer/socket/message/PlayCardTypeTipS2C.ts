module sgame {
    export class PlayCardTypeTipS2C {
    public __id:string = "MajiangPlayCardTypeTipS2C";
	public type:int[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.type = Msg.decode(ba, "int", ba.readShort());
		
        }
            }
}