/**
 * Created by Saco on 2015/2/8.
 */
module sgame {
    export class int {
        private _num:number = null;

        public constructor(num?:number) {
            this._num = num;
        }

        public set num(num:number) {
            this._num = num;
        }

        public get num():number {
            return this._num;
        }
    }
}