module sgame {
    export class GameOverS2C {
    public __id:string = "MajiangGameOverS2C";
	public pos:int = new int(0);
	public posPao:int = new int(0);
	public result:GameResult[] = [];
	public hupaiType:string[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.pos = Msg.decode(ba, "int");
		this.posPao = Msg.decode(ba, "int");
		this.result = Msg.decode(ba, "GameResult", ba.readShort());
		this.hupaiType = Msg.decode(ba, "string", ba.readShort());
		
        }
            }
}