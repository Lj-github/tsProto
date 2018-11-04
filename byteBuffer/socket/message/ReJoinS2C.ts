module sgame {
    export class ReJoinS2C {
    public __id:string = "MajiangReJoinS2C";
	public roleInfo:RoleInfo[] = [];
	public pos:int = new int(0);
	public roomNum:int = new int(0);
	public roomId:int = new int(0);
	public cards:CardsInfo[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.roleInfo = Msg.decode(ba, "RoleInfo", ba.readShort());
		this.pos = Msg.decode(ba, "int");
		this.roomNum = Msg.decode(ba, "int");
		this.roomId = Msg.decode(ba, "int");
		this.cards = Msg.decode(ba, "CardsInfo", ba.readShort());
		
        }
            }
}