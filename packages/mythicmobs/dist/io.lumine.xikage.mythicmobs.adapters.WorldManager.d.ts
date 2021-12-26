declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    interface WorldManager {
                        // @ts-ignore
                        isChunkLoaded(p0: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, p1: number /*int*/, p2: number /*int*/): boolean
                        // @ts-ignore
                        getEntitiesInChunk(p0: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, p1: number /*int*/, p2: number /*int*/): number /*int*/
                        // @ts-ignore
                        handleMobDespawnEvent(p0: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                        // @ts-ignore
                        getEntity(p0: java.util.UUID): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                    }
                }
            }
        }
    }
}
