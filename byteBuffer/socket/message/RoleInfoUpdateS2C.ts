module sgame {
    export class RoleInfoUpdateS2C {
    public __id:string = "MajiangRoleInfoUpdateS2C";
	public roleInfo:RoleInfo = new RoleInfo();
	
    
                public decode(ba:egret.ByteArray):void{
            this.roleInfo = Msg.decode(ba, "RoleInfo");
		
        }
            }
}