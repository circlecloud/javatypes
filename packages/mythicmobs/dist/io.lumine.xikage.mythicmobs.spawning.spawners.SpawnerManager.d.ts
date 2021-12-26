declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace spawning {
                    namespace spawners {
                        // @ts-ignore
                        class SpawnerManager extends java.lang.Object {
                            // @ts-ignore
                            constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                            // @ts-ignore
                            public listSpawners: java.util.List<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner> | Array<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>
                            // @ts-ignore
                            public mmSpawners: java.util.concurrent.ConcurrentHashMap<io.lumine.xikage.mythicmobs.adapters.AbstractLocation, io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>
                            // @ts-ignore
                            public mmChunkSpawnerLookup: java.util.concurrent.ConcurrentHashMap<java.lang.String | string, java.util.HashSet<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>>
                            // @ts-ignore
                            public mmSpawnerHashcodeLookup: java.util.concurrent.ConcurrentHashMap<java.lang.Integer | number, io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>
                            // @ts-ignore
                            public loadSpawners(): void
                            // @ts-ignore
                            public saveSpawners(): void
                            // @ts-ignore
                            public getSpawners(): Array<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>
                            // @ts-ignore
                            public tickSpawnerClocks(): void
                            // @ts-ignore
                            public resetAndSaveAll(): void
                            // @ts-ignore
                            public getSpawnersByString(string: java.lang.String | string): java.util.ArrayList<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>
                            // @ts-ignore
                            public getSpawnersByString(abstractLocation: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, string: java.lang.String | string): java.util.ArrayList<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>
                            // @ts-ignore
                            public getSpawnerByName(name: java.lang.String | string): io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner
                            // @ts-ignore
                            public getSpawnersByGroup(group: java.lang.String | string): java.util.ArrayList<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>
                            // @ts-ignore
                            public getSpawnerAtLocation(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner
                            // @ts-ignore
                            public getSpawnerByHashcode(hashcode: number /*int*/): java.util.Optional<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>
                            // @ts-ignore
                            public getSpawnersByChunk(lookup: java.lang.String | string): java.util.Optional<java.util.Collection<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner> | Array<io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner>>
                            // @ts-ignore
                            public hasBreakableSpawner(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public createSpawner(name: java.lang.String | string, location: Location, mobName: java.lang.String | string): io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner
                            // @ts-ignore
                            public copySpawner(name: java.lang.String | string, nameNew: java.lang.String | string, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public moveSpawner(name: java.lang.String | string, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public moveSpawner(ms: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public static mobIsValid(location: Location, u: java.util.UUID): boolean
                            // @ts-ignore
                            public static playerWithinSpawnerRange(range: number /*int*/, location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public static RemoveMobFromSpawners(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                            // @ts-ignore
                            public setSpawnerAttribute(ms: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner, attr: java.lang.String | string, value: java.lang.String | string): boolean
                            // @ts-ignore
                            public addSpawnerCondition(ms: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner, condition: java.lang.String | string, value: java.lang.String | string): boolean
                            // @ts-ignore
                            public removeSpawnerCondition(ms: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner, condition: java.lang.String | string): boolean
                            // @ts-ignore
                            public removeSpawner(ms: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner): boolean
                            // @ts-ignore
                            public findSpawningLocation(location: Location, radius: number /*int*/): Location
                            // @ts-ignore
                            public static randomizeSpawnLocation(location: Location, r: number /*int*/): Location
                            // @ts-ignore
                            public static randomRange(arg0: number /*double*/, arg1: number /*double*/): number /*double*/
                            // @ts-ignore
                            public areaIsEmpty(loc: Location): boolean
                            // @ts-ignore
                            public addSpawnerToChunkLookupTable(ms: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner): void
                            // @ts-ignore
                            public removeSpawnerFromChunkLookupTable(ms: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner): void
                            // @ts-ignore
                            public buildSpawnerChunkLookupTable(): void
                            // @ts-ignore
                            public getSpawnerCopyName(name: java.lang.String | string): string
                            // @ts-ignore
                            public getSpawnerItem(type: java.lang.String | string): java.util.Optional<ItemStack>
                        }
                    }
                }
            }
        }
    }
}
