declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace spawning {
                    namespace random {
                        // @ts-ignore
                        class RandomSpawnerManager extends java.lang.Object implements io.lumine.utils.terminable.Terminable {
                            // @ts-ignore
                            constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                            // @ts-ignore
                            public listRandomSpawningAddLand: java.util.List<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner>
                            // @ts-ignore
                            public listRandomSpawningAddSea: java.util.List<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner>
                            // @ts-ignore
                            public listRandomSpawningAddAir: java.util.List<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner>
                            // @ts-ignore
                            public listRandomSpawningR: java.util.List<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner>
                            // @ts-ignore
                            public listRandomSpawningD: java.util.List<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner>
                            // @ts-ignore
                            public landSpawnPoints: java.util.Set<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint>
                            // @ts-ignore
                            public airSpawnPoints: java.util.Set<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint>
                            // @ts-ignore
                            public seaSpawnPoints: java.util.Set<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint>
                            // @ts-ignore
                            public lavaSpawnPoints: java.util.Set<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint>
                            // @ts-ignore
                            public groundSpawnPoints: java.util.Set<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint>
                            // @ts-ignore
                            public randomlySpawnedMobs: java.util.Set<io.lumine.xikage.mythicmobs.mobs.ActiveMob> | Array<io.lumine.xikage.mythicmobs.mobs.ActiveMob>
                            // @ts-ignore
                            public loadRandomSpawns(): void
                            // @ts-ignore
                            public getNumberOfSpawners(): number /*int*/
                            // @ts-ignore
                            public handleSpawnEvent(rsp: io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public reload(): void
                            // @ts-ignore
                            public terminate(): boolean
                            // @ts-ignore
                            public spawnMobs(): void
                            // @ts-ignore
                            public doSpawns(rsp: io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint, it: java.util.Iterator<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawner>): void
                            // @ts-ignore
                            public getMobsNearPlayer(p: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): number /*int*/
                            // @ts-ignore
                            public isChunkLoaded(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, x: number /*int*/, z: number /*int*/): boolean
                            // @ts-ignore
                            public getEntitiesInChunk(world: io.lumine.xikage.mythicmobs.adapters.AbstractWorld, x: number /*int*/, z: number /*int*/): number /*int*/
                            // @ts-ignore
                            public getLandSpawnPoints(): Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint>
                            // @ts-ignore
                            public getSeaSpawnPoints(): Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint>
                        }
                    }
                }
            }
        }
    }
}
