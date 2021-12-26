declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace easygui {
                    // @ts-ignore
                    class EasyScreen extends eos.moe.dragoncore.api.easygui.component.BasicContainer {
                        // @ts-ignore
                        constructor(url: java.lang.String | string, w: number /*int*/, h: number /*int*/)
                        // @ts-ignore
                        public static setOpenedScreen(player: Player, screen: eos.moe.dragoncore.api.easygui.EasyScreen): void
                        // @ts-ignore
                        public static getOpenedScreen(player: Player): eos.moe.dragoncore.api.easygui.EasyScreen
                        // @ts-ignore
                        public static closeScreen(player: Player, id: java.lang.String | string): eos.moe.dragoncore.api.easygui.EasyScreen
                        // @ts-ignore
                        public static closeScreen(player: Player, force: boolean): eos.moe.dragoncore.api.easygui.EasyScreen
                        // @ts-ignore
                        public static closeScreen(player: Player): eos.moe.dragoncore.api.easygui.EasyScreen
                        // @ts-ignore
                        public onClose(player: Player): void
                        // @ts-ignore
                        public updateGui(player: Player): boolean
                        // @ts-ignore
                        public openGui(player: Player): void
                        // @ts-ignore
                        public closeGui(player: Player): void
                        // @ts-ignore
                        public buildThenPrint(): void
                        // @ts-ignore
                        public build(player: Player): YamlConfiguration
                        // @ts-ignore
                        public build(player: Player, functions: java.util.Map<java.lang.String | string, java.lang.String | string>): java.util.Map<java.lang.String | string, java.util.Map<java.lang.String | string, java.lang.Object | any>>
                        // @ts-ignore
                        public setUrl(url: java.lang.String | string): void
                        // @ts-ignore
                        public setW(w: number /*int*/): void
                        // @ts-ignore
                        public setH(h: number /*int*/): void
                        // @ts-ignore
                        public getUrl(): string
                        // @ts-ignore
                        public getW(): number /*int*/
                        // @ts-ignore
                        public getH(): number /*int*/
                    }
                }
            }
        }
    }
}
