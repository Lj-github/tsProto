module sgame {
    export class TotalRankS2C {
    public __id:string = "MouseTotalRankS2C";
	public roleList:RoleInfo[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.roleList = Msg.decode(ba, "RoleInfo", ba.readShort());
		
        }
            }
}