module sgame {
    export class LoginS2C {
    public __id:string = "MajiangLoginS2C";
	public invite:string = "";
	public rebateNum:int = new int(0);
	public inviteOtherNum:int = new int(0);
	public roleId:string = "";
	
    
                public decode(ba:egret.ByteArray):void{
            this.invite = Msg.decode(ba, "string");
		this.rebateNum = Msg.decode(ba, "int");
		this.inviteOtherNum = Msg.decode(ba, "int");
		this.roleId = Msg.decode(ba, "string");
		
        }
            }
}