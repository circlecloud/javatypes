declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitBossBar extends java.lang.Object implements io.lumine.xikage.mythicmobs.adapters.AbstractBossBar {
                            // @ts-ignore
                            constructor(title: java.lang.String | string, aColor: io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarColor, aStyle: io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarStyle)
                            // @ts-ignore
                            public getTitle(): string
                            // @ts-ignore
                            public setTitle(title: java.lang.String | string): void
                            // @ts-ignore
                            public getColor(): io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarColor
                            // @ts-ignore
                            public setColor(color: java.lang.String | string): void
                            // @ts-ignore
                            public getStyle(): io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarStyle
                            // @ts-ignore
                            public setStyle(style: java.lang.String | string): void
                            // @ts-ignore
                            public removeFlag(flag: java.lang.String | string): void
                            // @ts-ignore
                            public addFlag(flag: java.lang.String | string): void
                            // @ts-ignore
                            public hasFlag(flag: java.lang.String | string): boolean
                            // @ts-ignore
                            public setProgress(progress: number /*double*/): void
                            // @ts-ignore
                            public getProgress(): number /*double*/
                            // @ts-ignore
                            public addPlayer(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                            // @ts-ignore
                            public removePlayer(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                            // @ts-ignore
                            public removeAll(): void
                            // @ts-ignore
                            public getPlayers(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                            // @ts-ignore
                            public setVisible(visible: boolean): void
                            // @ts-ignore
                            public isVisible(): boolean
                            // @ts-ignore
                            public setCreateFog(b: boolean): void
                            // @ts-ignore
                            public setDarkenSky(b: boolean): void
                            // @ts-ignore
                            public setPlayBossMusic(b: boolean): void
                        }
                    }
                }
            }
        }
    }
}
