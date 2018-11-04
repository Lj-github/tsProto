/**
 * Created by husong on 4/20/17.
 */
class Config {
    private static _instance:Config;
    public static getInstance():Config {
        if (!Config._instance) {
            Config._instance = new Config()
        }
        return Config._instance;
    }

    get config() {
        return RES.getRes("config_json")
    }

    public get(str:string) {
        let keys = str.split(".");
        let result = this.config;
        keys.forEach(key=>{
            result = result[key]
        });
        return result;
    }
}