/**
 * Created by DELL on 2018/1/13.
 */
class Bit{
    public static _xor(a,b){
        if ((a!=null) &&(b!=null)){
            return a^b
        }
    }
    /**
     * //按位与&：两个操作数都是1，结果才是1
     * @param a number
     * @param b number
     * @returns {number}
     * @private
     */
    public static _and(a,b){
        if ((a!=null) &&(b!=null)){
            return a&b
        }
    }
    /**
     * //按位或：两个操作数只要有一个是1，结果就是1
     * @param
     * @param b
     * @returns {number}
     * @private
     */
    public static _or(a,b){
        if ((a!=null) &&(b!=null)){
            return a|b
        }
    }
    /**
     *
     * @param a
     * @returns {number}
     * @private
     */
    public static _not(a){
        if ((a!=null)){
            return ~a
        }
    }
}