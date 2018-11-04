module sgame {
    export class DealCardNoticeS2C {
    public __id:string = "MajiangDealCardNoticeS2C";
	public pos:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.pos = Msg.decode(ba, "int");
		
        }
            }
}