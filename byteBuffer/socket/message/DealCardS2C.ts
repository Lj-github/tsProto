module sgame {
    export class DealCardS2C {
    public __id:string = "MajiangDealCardS2C";
	public card:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.card = Msg.decode(ba, "int");
		
        }
            }
}