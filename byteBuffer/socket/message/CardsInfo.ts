module sgame {
	export class CardsInfo {
		public pos: int = new int(0);
		public deal: int[] = [];
		public chi: int[] = [];
		public peng: int[] = [];
		public gang: int[] = [];
		public anGang: int[] = [];
		public hands: int[] = [];
		public handsCount: int = new int(0);

		public encode(): egret.ByteArray {
			let ba: egret.ByteArray = new egret.ByteArray();
			ba.endian = egret.Endian.LITTLE_ENDIAN;
			Msg.encode(ba, this.pos);
			Msg.encode(ba, this.deal);
			Msg.encode(ba, this.chi);
			Msg.encode(ba, this.peng);
			Msg.encode(ba, this.gang);
			Msg.encode(ba, this.anGang);
			Msg.encode(ba, this.hands);
			Msg.encode(ba, this.handsCount);

			return ba;
		}
		public decode(ba: egret.ByteArray): void {
			this.pos = Msg.decode(ba, "int");
			this.deal = Msg.decode(ba, "int", ba.readShort());
			this.chi = Msg.decode(ba, "int", ba.readShort());
			this.peng = Msg.decode(ba, "int", ba.readShort());
			this.gang = Msg.decode(ba, "int", ba.readShort());
			this.anGang = Msg.decode(ba, "int", ba.readShort());
			this.hands = Msg.decode(ba, "int", ba.readShort());
			this.handsCount = Msg.decode(ba, "int");

		}
	}
}