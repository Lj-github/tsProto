module sgame {
    export class RankInfoInitS2C {
    public __id:string = "MouseRankInfoInitS2C";
	public roleList:RoleInfo[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.roleList = Msg.decode(ba, "RoleInfo", ba.readShort());
		
        }
            }
}