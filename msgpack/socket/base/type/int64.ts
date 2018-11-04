/**
 * Created by Saco on 2015/2/6.
 */
module sgame {
    export class int64 {
        public static MAX_INT32:number = 4294967296;
        private _numHigh32:number = null;
        private _numLow32:number = null;
        private _num:number = null;
        private _str:string;
        public sign;

        public constructor(numHigh32:number = 0, numLow32 = 0) {
            this.setNum(numHigh32, numLow32);
        }

        public set num(num:number) {
            if (num < 0) {
                this._num = Math.abs(num);
                this.sign = true;
            } else {
                this._num = num;
            }
            this.separateNumber();
            this.setNum(this._numHigh32, this._numLow32);
        }

        private separateNumber():void {
            this._numHigh32 = Math.floor(this._num / int64.MAX_INT32);
            this._numLow32 = this._num % int64.MAX_INT32;
        }

        public setNum(numHigh32:number = 0, numLow32 = 0):void {
            this._numHigh32 = numHigh32;
            this._numLow32 = numLow32;
            this._num = this._numHigh32 * int64.MAX_INT32 + this._numLow32;
            this._str = null;
            this.sign = this._numHigh32 < 0;
        }

        public getHigh32():number {
            return this._numHigh32;
        }

        public getLow32():number {
            return this._numLow32;
        }

        public static compare(numA:int64, numB:any):number {
            if (typeof numB == "number") {
                var tempInt64:int64 = new int64();
                tempInt64.num = numB;
                return int64.compare(numA, tempInt64);
            }
            if (numA.sign != numB.sign) {
                return numA.sign ? -1 : 1;
            } else {
                var flag = numA.sign; //正
                var bigger = false;
                if (numA.getHigh32() > numB.getHigh32()) {
                    bigger = true;
                } else if (numA.getHigh32() == numB.getHigh32()) {
                    if (numA.getLow32() == numB.getLow32()) {
                        return 0;
                    }
                    bigger = numA.getLow32() > numB.getLow32();
                }
                return !flag && bigger ? 1 : -1;
            }
        }

        public static add(num:int64, addNum:any):int64 {
            if (typeof addNum == "string") {
                return int64.add(num, parseInt(addNum));    //TODO
            } else if (typeof addNum == "number") {
                var tempInt64:int64 = new int64();
                tempInt64.setNum(Math.floor(addNum / int64.MAX_INT32), addNum % int64.MAX_INT32);
                return int64.add(num, tempInt64);
            } else if (addNum instanceof int64) {
                var result:int64 = new int64();
                var tempLow32 = num.getLow32() - int64.MAX_INT32 + addNum.getLow32();
                if (tempLow32 > 0) {
                    result.setNum(num.getHigh32() + addNum.getHigh32() + 1, tempLow32);
                } else {
                    result.setNum(num.getHigh32() + addNum.getHigh32(), num.getLow32() + addNum.getLow32());
                }
                return result;
            }
        }

        public static reduce(num:int64, redNum:any):int64 {
            if (typeof redNum == "string") {
                return int64.reduce(num, parseInt(redNum)); //TODO
            } else if (typeof redNum == "number") {
                var tempInt64:int64 = new int64();
                tempInt64.setNum(Math.floor(redNum / int64.MAX_INT32), redNum % int64.MAX_INT32);
                return int64.reduce(num, tempInt64);
            } else if (redNum instanceof int64) {
                var result:int64 = new int64();
                var tempLow32 = num.getLow32() - redNum.getLow32();
                if (tempLow32 < 0) {
                    result.setNum(num.getHigh32() - redNum.getHigh32() - 1, int64.MAX_INT32 + tempLow32);
                } else {
                    result.setNum(num.getHigh32() - redNum.getHigh32(), tempLow32);
                }
                return result;
            }
        }

        public static div(num:int64, divNum:any):any {
            if (typeof divNum == "string") {
                return int64.div(num, parseInt(divNum));    //TODO  change parseInt
            } else if (typeof divNum == "number") {
                var tempInt64:int64 = new int64();
                tempInt64.num = divNum;
                return int64.div(num, tempInt64);
            } else if (divNum instanceof int64) {
                if (num.getHigh32() <= 0 && divNum.getHigh32() <= 0) {
                    return new int64(0, Math.floor(num.getLow32() / divNum.getLow32()));
                }
                if (num.getHigh32() > 0 && divNum.getHigh32() > 0) {
                    if (num.getHigh32() == divNum.getHigh32()) {
                        return num.getLow32() > divNum.getLow32() ? new int64(0, 1) : new int64(0, 0);
                    }
                    return new int64(0, Math.floor(num.getHigh32() / divNum.getHigh32()));
                }
                if (num.getHigh32() > 0 && divNum.getHigh32() <= 0) {
                    var low = Math.floor((num.getHigh32() % divNum.getLow32()) / divNum.getLow32() * int64.MAX_INT32 + num.getLow32() / divNum.getLow32());
                    return new int64(Math.floor(num.getHigh32() / divNum.getLow32()), low);
                }
                if (num.getHigh32() <= 0 && divNum.getHigh32() > 0) {
                    return 0;
                }
            }
        }

        public get num() {
            // return this._num;
            return <any>this.toString();
        }

        public toKey() {
            return this._numHigh32.toString() + ":" + this._numLow32.toString();
        }

        public toString():string {
            var strHigh = int64.stringTimes(this._numHigh32.toString(), int64.MAX_INT32.toString());
            var strLow = this._numLow32.toString();
            return int64.complexAdd(strHigh, strLow);
        }

        private static stringTimes(num1:string, num2:string) {
            var fix = "";
            var result = "";
            for (var i = num1.length - 1; i >= 0; i--) {
                var digitString = this.simpleTimes(num2, num1[i]).toString() + fix;
                result = this.complexAdd(result, digitString);
                fix += "0";
            }
            return result;
        }

        public static simpleTimes(num1:string, num2:string) {
            return parseInt(num1) * parseInt(num2);
        }

        private static simpleAdd(num1:string, num2:string) {
            return parseInt(num1) + parseInt(num2);
        }

        private static complexAdd(num1:string, num2:string) {
            var index1 = num1.length;
            var index2 = num2.length;
            var result = [];
            var resultIndex = Math.max(index1, index2) + 1;
            while (index1 >= 0 || index2 >= 0) {
                index1--;
                index2--;
                resultIndex--;
                var element = this.getElement(num1[index1]) + this.getElement(num2[index2]) + this.getElement(result[resultIndex]);
                if (element < 10) {
                    result[resultIndex] = (element % 10);
                } else if (element >= 10) {
                    result[resultIndex] = (element % 10);
                    result[resultIndex - 1] = 1;
                }
            }
            if (!result[0]) {
                result.splice(0, 1);
            }
            return result.join("");
        }

        private static getElement(char:string) {
            var element = parseInt(char);
            if (element) {
                return element;
            }
            return 0;
        }

        public static fromString(str:string):int64 {
            //TODO
            var int = new int64();
            int.num = parseInt(str);
            return int;
        }
    }
}