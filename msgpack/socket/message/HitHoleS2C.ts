module sgame {
    export class HitHoleS2C {
    public __id:string = "MouseHitHoleS2C";
	public res:int = new int(0);
	
    
                public decode(ba:egret.ByteArray):void{
            this.res = Msg.decode(ba, "int");
		
        }
            }
}