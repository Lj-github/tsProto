/**
 * Created by DELL on 2018/1/12.
 */

class LoactionUtil{
    public static  ch_cn = new Ch_cn();
    public constructor(){
        gt.LoactionUtil = this;
    }
    public  getLocationString(key,...arg):string{
            if (typeof (key) != "string"){
                return null
            }
            var ltString = gt.LocationStrings[key];

            if (arg.length>0){

            }

        return ltString
    }

}