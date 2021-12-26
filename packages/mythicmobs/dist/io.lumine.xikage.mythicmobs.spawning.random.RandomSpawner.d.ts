declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace spawning {
                    namespace random {
                        // @ts-ignore
                        class RandomSpawner extends java.lang.Object {
                            // @ts-ignore
                            constructor(file: java.lang.String | string, name: java.lang.String | string, mc: io.lumine.xikage.mythicmobs.io.MythicConfig)
                            // @ts-ignore
                            public static spawnPoints: java.util.Set<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint> | Array<io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint>
                            // @ts-ignore
                            public name: java.lang.String | string
                            // @ts-ignore
                            public mobTypes: java.util.List<io.lumine.xikage.mythicmobs.mobs.MythicMob> | Array<io.lumine.xikage.mythicmobs.mobs.MythicMob>
                            // @ts-ignore
                            public priority: number /*int*/
                            // @ts-ignore
                            public level: number /*int*/
                            // @ts-ignore
                            public chance: number /*float*/
                            // @ts-ignore
                            public biomes: java.util.HashSet<Biome>
                            // @ts-ignore
                            public worlds: java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractWorld>
                            // @ts-ignore
                            public spawnReasons: java.util.HashSet<CreatureSpawnEvent.SpawnReason>
                            // @ts-ignore
                            public conditions: java.util.List<io.lumine.xikage.mythicmobs.skills.SkillCondition> | Array<io.lumine.xikage.mythicmobs.skills.SkillCondition>
                            // @ts-ignore
                            public getChance(): number /*float*/
                            // @ts-ignore
                            public getLevel(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): number /*int*/
                            // @ts-ignore
                            public getBaseLevel(): number /*int*/
                            // @ts-ignore
                            public getPriority(): number /*int*/
                            // @ts-ignore
                            public getAction(): io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnerAction
                            // @ts-ignore
                            public getBiomes(): java.util.HashSet<Biome>
                            // @ts-ignore
                            public getWorlds(): java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractWorld>
                            // @ts-ignore
                            public getReasons(): java.util.HashSet<CreatureSpawnEvent.SpawnReason>
                            // @ts-ignore
                            public isValid(): boolean
                            // @ts-ignore
                            public hasConditions(): boolean
                            // @ts-ignore
                            public checkSpawn(rsp: io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint): boolean
                            // @ts-ignore
                            public spawn(rsp: io.lumine.xikage.mythicmobs.spawning.random.RandomSpawnPoint): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                            // @ts-ignore
                            public getPositionType(): io.lumine.xikage.mythicmobs.spawning.random.SpawnPointType
                        }
                    }
                }
            }
        }
    }
}
