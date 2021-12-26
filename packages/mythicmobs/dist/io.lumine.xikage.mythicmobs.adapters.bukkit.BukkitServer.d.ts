declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitServer extends java.lang.Object implements io.lumine.xikage.mythicmobs.adapters.ServerInterface {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getWorlds(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractWorld>
                            // @ts-ignore
                            public dispatchCommand(s: java.lang.String | string): void
                            // @ts-ignore
                            public getPlayer(uuid: java.util.UUID): io.lumine.xikage.mythicmobs.adapters.AbstractPlayer
                            // @ts-ignore
                            public getPlayer(name: java.lang.String | string): io.lumine.xikage.mythicmobs.adapters.AbstractPlayer
                            // @ts-ignore
                            public getEntity(uuid: java.util.UUID): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public getWorld(uuid: java.util.UUID): io.lumine.xikage.mythicmobs.adapters.AbstractWorld
                            // @ts-ignore
                            public getWorld(name: java.lang.String | string): io.lumine.xikage.mythicmobs.adapters.AbstractWorld
                            // @ts-ignore
                            public getOnlinePlayers(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                            // @ts-ignore
                            public newLocation(w: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, x: number /*double*/, y: number /*double*/, z: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                            // @ts-ignore
                            public isValidBiome(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public createBossBar(title: java.lang.String | string, color: io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarColor, style: io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarStyle): io.lumine.xikage.mythicmobs.adapters.AbstractBossBar
                        }
                    }
                }
            }
        }
    }
}
