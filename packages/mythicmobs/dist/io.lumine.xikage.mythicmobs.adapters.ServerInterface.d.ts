declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    interface ServerInterface {
                        // @ts-ignore
                        getWorlds(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractWorld>
                        // @ts-ignore
                        dispatchCommand(p0: java.lang.String | string): void
                        // @ts-ignore
                        getOnlinePlayers(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractPlayer>
                        // @ts-ignore
                        newLocation(p0: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, p1: number /*double*/, p2: number /*double*/, p3: number /*double*/): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        getWorld(p0: java.lang.String | string): io.lumine.xikage.mythicmobs.adapters.AbstractWorld
                        // @ts-ignore
                        isValidBiome(p0: java.lang.Object | any): boolean
                        // @ts-ignore
                        createBossBar(p0: java.lang.String | string, p1: io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarColor, p2: io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarStyle): io.lumine.xikage.mythicmobs.adapters.AbstractBossBar
                        // @ts-ignore
                        getPlayer(p0: java.util.UUID): io.lumine.xikage.mythicmobs.adapters.AbstractPlayer
                        // @ts-ignore
                        getPlayer(p0: java.lang.String | string): io.lumine.xikage.mythicmobs.adapters.AbstractPlayer
                        // @ts-ignore
                        getEntity(p0: java.util.UUID): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        getWorld(p0: java.util.UUID): io.lumine.xikage.mythicmobs.adapters.AbstractWorld
                    }
                }
            }
        }
    }
}
