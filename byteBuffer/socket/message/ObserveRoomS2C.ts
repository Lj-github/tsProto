module sgame {
    export class ObserveRoomS2C {
    public __id:string = "MajiangObserveRoomS2C";
	public roleInfo:RoleInfo[] = [];
	public roomId:int = new int(0);
	public zhuang:int = new int(0);
	public cards:CardsInfo[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.roleInfo = Msg.decode(ba, "RoleInfo", ba.readShort());
		this.roomId = Msg.decode(ba, "int");
		this.zhuang = Msg.decode(ba, "int");
		this.cards = Msg.decode(ba, "CardsInfo", ba.readShort());
		
        }
            }
}