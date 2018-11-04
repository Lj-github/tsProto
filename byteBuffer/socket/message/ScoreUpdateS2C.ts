module sgame {
    export class ScoreUpdateS2C {
    public __id:string = "MajiangScoreUpdateS2C";
	public roleScore:RoleScore[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.roleScore = Msg.decode(ba, "RoleScore", ba.readShort());
		
        }
            }
}