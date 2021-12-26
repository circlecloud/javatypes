declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitWorldManager extends java.lang.Object implements io.lumine.xikage.mythicmobs.adapters.WorldManager {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public isChunkLoaded(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, x: number /*int*/, z: number /*int*/): boolean
                            // @ts-ignore
                            public getEntitiesInChunk(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, x: number /*int*/, z: number /*int*/): number /*int*/
                            // @ts-ignore
                            public onWorldLoad(event: WorldLoadEvent): void
                            // @ts-ignore
                            public onWorldUnload(event: WorldUnloadEvent): void
                            // @ts-ignore
                            public onChunkLoad(event: ChunkLoadEvent): void
                            // @ts-ignore
                            public onChunkUnload(event: ChunkUnloadEvent): void
                            // @ts-ignore
                            public getChunkString(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, x: number /*int*/, z: number /*int*/): string
                            // @ts-ignore
                            public getChunkString(chunk: Chunk): string
                            // @ts-ignore
                            public getEntity(uuid: java.util.UUID): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public handleMobDespawnEvent(mob: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                        }
                    }
                }
            }
        }
    }
}
