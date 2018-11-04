import Api = sgame.Api;
import LoginC2S = sgame.LoginC2S;
import LoginS2C = sgame.LoginS2C;
window["gm"] = {}
var gm ;

declare var loadConfig: { res: string, thm: string };
class Main extends eui.UILayer {
    private loadingView: LoadingUI;
    private firstGroup = "login";

    protected createChildren(): void {
        super.createChildren();
        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        //Config loading process interface
        //设置加载进度界面
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        // initialize the Resource loading library
        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json?" + loadConfig.res, "resource/");
    }

    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        // load skin theme configuration file, you can manually modify the file. And replace the default skin.
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        let theme = new eui.Theme("resource/default.thm.json?" + loadConfig.thm, this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup(this.firstGroup);
    }

    private isThemeLoadEnd: boolean = false;

    private onThemeLoadComplete(): void {
        this.isThemeLoadEnd = true;
        this.createScene();
    }

    private isResourceLoadEnd: boolean = false;

    private onResourceLoadComplete(event: RES.ResourceEvent): void {
        if (event.groupName == this.firstGroup) {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.isResourceLoadEnd = true;
            this.createScene();
        }
    }

    private createScene() {
        if (this.isThemeLoadEnd && this.isResourceLoadEnd) {
            this.startCreateScene();
        }
    }

    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    private onResourceLoadError(event: RES.ResourceEvent): void {
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }

    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == this.firstGroup) {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    async startCreateScene() {
        Api.init(this.stage);

        this.parent.removeChild(this);
        let ip = gt.DefineConfig.LoginServer.ip;
        if (egret.getOption("ip")) {
            ip = egret.getOption("ip");
        }
        let port = gt.DefineConfig.LoginServer.port;
        let res = await this.platFormLogin();

        Api.ViewManager.openView(LoginView);


        /*Api.SocketCLient.connect(ip, 9006);


        Api.SocketCLient.addEventListener(egret.Event.CONNECT, () => {
            let loginC2S = new LoginC2S();
            loginC2S.account = res.account;
            loginC2S.token = res.token;
            loginC2S.invite = egret.getOption("invite");
            Api.GameSocket.sendMsg(loginC2S);
            Api.MessageCenter.regMsgListener(LoginS2C, (msg: LoginS2C) => {
                RoleInfo.getInstance().initLoginRes(msg);
            }, this);
            Api.GameSocket.sendMsg(new VipInfosC2S());
        }, this);

        Api.ViewManager.openView(LoginView);
        Api.MessageCenter.regMsgListener(JoinInfoS2C, (msg: JoinInfoS2C) => {
            GamePlayGroup.joinInfo = msg;

          //  Wx.getInstance().wxGetTicket("ini");
            
            Api.ViewManager.closeViewsByLayer(LayerType.UI);
            Api.ViewManager.openView(GameBoard, msg.roomId.num);
        }, this);

        Api.MessageCenter.regMsgListener(StartS2C, (msg: StartS2C) => {
            GamePlayGroup.startS2C = msg;
        }, this);*/
    }

    private async platFormLogin() {
        let define = egret.getDefinitionByName(window["platform"]);
        if (define) {
            Api.Platform = new define();
            return Api.Platform.login();
        }
        return {account: "test", token: ""}
    }
}