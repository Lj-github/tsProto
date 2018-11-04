module sgame {
    export class RankScoreUpdateS2C {
    public __id:string = "MouseRankScoreUpdateS2C";
	public account:string = "";
	public index:int = new int(0);
	public score:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.account = Msg.decode(ba, "string");
		this.index = Msg.decode(ba, "int");
		this.score = Msg.decode(ba, "int");
		
        }
            }
}