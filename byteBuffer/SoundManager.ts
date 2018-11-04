import ResourceItem = RES.ResourceItem;
/**
 * Created by husong on 4/21/17.
 */
class SoundManager {
    private soundChannel: egret.SoundChannel;
    private soundChannelValue = 1;
    private static _instance: SoundManager;

    public static getInstance(): SoundManager {
        if (!SoundManager._instance) {
            SoundManager._instance = new SoundManager()
        }
        return SoundManager._instance;
    }

    private path = "resource/assets/sound";

    public async playCard(value: number) {
        let path = value.toString().split("").join("_") + "_1";
        this.playSound(path);
    }

    public async playCardType(type: GroupType) {
        switch (type) {
            case GroupType.CHI:
                this.playSound("chi_0");
                break;
            case GroupType.PENG:
                this.playSound("");
                break;
            case GroupType.MING_GANG:
            case GroupType.AN_GANG:
                this.playSound("gang_0");
                break;
            case GroupType.HU:
                break;
        }
    }

    private async playSound(path: string) {
        //  return;
        const sound: egret.Sound = await this.getResAsync(path, ResourceItem.TYPE_SOUND);

        this.soundChannel = sound.play(0, 1);
        this.soundChannel.volume = this.soundChannelValue;


        //sound.play(0, 1);

    }

    private getResAsync(path: string, type): Promise<egret.Sound> {
        return new Promise(((resolve, reject) => {
            RES.getResAsync(path, (res) => {
                resolve(res);
            }, type);
        }));
    }

    public changeSoundValue(value: number) {
        this.soundChannelValue = value;
    }

}