module sgame {
    export class RecordS2C {
    public __id:string = "MajiangRecordS2C";
	public records:RecordEntry[] = [];
	
    
                public decode(ba:egret.ByteArray):void{
            this.records = Msg.decode(ba, "RecordEntry", ba.readShort());
		
        }
            }
}