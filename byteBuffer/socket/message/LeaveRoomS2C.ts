module sgame {
    export class LeaveRoomS2C {
    public __id:string = "MajiangLeaveRoomS2C";
	public pos:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.pos = Msg.decode(ba, "int");
		
        }
            }
}