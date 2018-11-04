module sgame {
    export class JoinInfoS2C {
    public __id:string = "MajiangJoinInfoS2C";
	public roleInfo:RoleInfo[] = [];
	public pos:int = new int(0);
	public roomNum:int = new int(0);
	public roomId:int = new int(0);
	public zhuang:int = new int(0);
	public maxRound:int = new int(0);
	public cards:CardsInfo[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.roleInfo = Msg.decode(ba, "RoleInfo", ba.readShort());
		this.pos = Msg.decode(ba, "int");
		this.roomNum = Msg.decode(ba, "int");
		this.roomId = Msg.decode(ba, "int");
		this.zhuang = Msg.decode(ba, "int");
		this.maxRound = Msg.decode(ba, "int");
		this.cards = Msg.decode(ba, "CardsInfo", ba.readShort());
		
        }
            }
}