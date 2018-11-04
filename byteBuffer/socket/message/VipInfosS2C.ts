module sgame {
    export class VipInfosS2C {
    public __id:string = "MajiangVipInfosS2C";
	public vipSeconds:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.vipSeconds = Msg.decode(ba, "int");
		
        }
            }
}