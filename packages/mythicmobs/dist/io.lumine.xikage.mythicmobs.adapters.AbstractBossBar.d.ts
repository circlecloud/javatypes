declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    interface AbstractBossBar {
                        // @ts-ignore
                        getTitle(): string
                        // @ts-ignore
                        setTitle(p0: java.lang.String | string): void
                        // @ts-ignore
                        getColor(): io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarColor
                        // @ts-ignore
                        setColor(p0: java.lang.String | string): void
                        // @ts-ignore
                        getStyle(): io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarStyle
                        // @ts-ignore
                        setStyle(p0: java.lang.String | string): void
                        // @ts-ignore
                        removeFlag(p0: java.lang.String | string): void
                        // @ts-ignore
                        addFlag(p0: java.lang.String | string): void
                        // @ts-ignore
                        hasFlag(p0: java.lang.String | string): boolean
                        // @ts-ignore
                        setProgress(p0: number /*double*/): void
                        // @ts-ignore
                        getProgress(): number /*double*/
                        // @ts-ignore
                        addPlayer(p0: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                        // @ts-ignore
                        removePlayer(p0: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): void
                        // @ts-ignore
                        removeAll(): void
                        // @ts-ignore
                        getPlayers(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                        // @ts-ignore
                        setVisible(p0: boolean): void
                        // @ts-ignore
                        isVisible(): boolean
                        // @ts-ignore
                        setCreateFog(p0: boolean): void
                        // @ts-ignore
                        setDarkenSky(p0: boolean): void
                        // @ts-ignore
                        setPlayBossMusic(p0: boolean): void
                    }
                }
            }
        }
    }
}
