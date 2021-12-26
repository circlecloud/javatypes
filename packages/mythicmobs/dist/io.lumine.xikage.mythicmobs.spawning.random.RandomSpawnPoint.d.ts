declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace spawning {
                    namespace random {
                        // @ts-ignore
                        class RandomSpawnPoint extends java.lang.Object {
                            // @ts-ignore
                            constructor(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation)
                            // @ts-ignore
                            constructor(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, pointType: io.lumine.xikage.mythicmobs.spawning.random.SpawnPointType)
                            // @ts-ignore
                            constructor(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, spawnReason: CreatureSpawnEvent.SpawnReason)
                            // @ts-ignore
                            constructor(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, spawnReason: CreatureSpawnEvent.SpawnReason, pt: io.lumine.xikage.mythicmobs.spawning.random.SpawnPointType)
                            // @ts-ignore
                            entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                            // @ts-ignore
                            spawnReason: CreatureSpawnEvent.SpawnReason
                            // @ts-ignore
                            pointType: io.lumine.xikage.mythicmobs.spawning.random.SpawnPointType
                            // @ts-ignore
                            levelMod: number /*float*/
                            // @ts-ignore
                            public getEntity(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public getLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                            // @ts-ignore
                            public getReason(): CreatureSpawnEvent.SpawnReason
                            // @ts-ignore
                            public getBiome(): Biome
                            // @ts-ignore
                            public getPointType(): io.lumine.xikage.mythicmobs.spawning.random.SpawnPointType
                            // @ts-ignore
                            public getLevelMod(): number /*float*/
                            // @ts-ignore
                            public setLevelMod(l: number /*float*/): void
                        }
                    }
                }
            }
        }
    }
}
