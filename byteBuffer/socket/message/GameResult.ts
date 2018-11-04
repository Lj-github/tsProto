module sgame {
    export class GameResult {
        public pos: int = new int(0);
        //public cards:int[] = [];
        public cards: any = [];
        public score: int = new int(0);

        public encode(): egret.ByteArray {
            let ba: egret.ByteArray = new egret.ByteArray();
            ba.endian = egret.Endian.LITTLE_ENDIAN;
            Msg.encode(ba, this.pos);
            Msg.encode(ba, this.cards);
            Msg.encode(ba, this.score);

            return ba;
        }
        public decode(ba: egret.ByteArray): void {
            this.pos = Msg.decode(ba, "int");
            this.cards = Msg.decode(ba, "int", ba.readShort());
            this.score = Msg.decode(ba, "int");

        }
    }
}