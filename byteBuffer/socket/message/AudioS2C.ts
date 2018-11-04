module sgame {
    export class AudioS2C {
    public __id:string = "MajiangAudioS2C";
	public id:string = "";
	
    
                public decode(ba:egret.ByteArray):void{
            this.id = Msg.decode(ba, "string");
		
        }
            }
}