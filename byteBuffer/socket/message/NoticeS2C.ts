module sgame {
    export class NoticeS2C {
    public __id:string = "MajiangNoticeS2C";
	public id:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.id = Msg.decode(ba, "int");
		
        }
            }
}