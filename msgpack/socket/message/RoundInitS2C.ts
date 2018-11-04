module sgame {
    export class RoundInitS2C {
    public __id:string = "MouseRoundInitS2C";
	public title:string = "";
	public holeList:Hole[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.title = Msg.decode(ba, "string");
		this.holeList = Msg.decode(ba, "Hole", ba.readShort());
		
        }
            }
}