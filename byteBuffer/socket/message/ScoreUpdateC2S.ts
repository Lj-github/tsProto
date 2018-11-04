module sgame {
    export class ScoreUpdateC2S {
    public __id:string = "MajiangScoreUpdateC2S";
	public roleScore:RoleScore[] = [];
	
            public encode():egret.ByteArray{
            let ba:egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.__id);
		Msg.encode(ba, this.roleScore);
		
            return ba;
        }
                
    }
}