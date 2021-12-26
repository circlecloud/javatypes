declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace mobs {
                    // @ts-ignore
                    class MobManager extends io.lumine.utils.serialization.SerializingModule implements io.lumine.xikage.mythicmobs.mobs.CasterRegistry, io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                        // @ts-ignore
                        readonly core: io.lumine.xikage.mythicmobs.MythicMobs
                        // @ts-ignore
                        public static spawnflag: boolean
                        // @ts-ignore
                        public static mountflag: boolean
                        // @ts-ignore
                        public terminate(): boolean
                        // @ts-ignore
                        public loadMobs(): void
                        // @ts-ignore
                        public getMobTypes(): Array<io.lumine.xikage.mythicmobs.mobs.MythicMob>
                        // @ts-ignore
                        public getMobNames(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getVanillaTypes(): Array<io.lumine.xikage.mythicmobs.mobs.MythicMob>
                        // @ts-ignore
                        public getVanillaType(type: io.lumine.xikage.mythicmobs.mobs.entities.MythicEntityType): java.util.Optional<io.lumine.xikage.mythicmobs.mobs.MythicMob>
                        // @ts-ignore
                        public getMobStacks(): Array<io.lumine.xikage.mythicmobs.mobs.MythicMobStack>
                        // @ts-ignore
                        public getSkillCaster(uuid: java.util.UUID): java.util.Optional<io.lumine.xikage.mythicmobs.skills.SkillCaster>
                        // @ts-ignore
                        public getActiveMobs(): Array<io.lumine.xikage.mythicmobs.mobs.ActiveMob>
                        // @ts-ignore
                        public getActiveMobsInCombat(): Array<io.lumine.xikage.mythicmobs.mobs.ActiveMob>
                        // @ts-ignore
                        public isActiveMob(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        // @ts-ignore
                        public isActiveMob(uuid: java.util.UUID): boolean
                        // @ts-ignore
                        public getActiveMob(uuid: java.util.UUID): java.util.Optional<io.lumine.xikage.mythicmobs.mobs.ActiveMob>
                        // @ts-ignore
                        public getVoidList(): Array<java.util.UUID>
                        // @ts-ignore
                        public setIgnoreEntity(uuid: java.util.UUID): void
                        // @ts-ignore
                        public isIgnoredEntity(uuid: java.util.UUID): boolean
                        // @ts-ignore
                        public removeAllMobs(): number /*int*/
                        // @ts-ignore
                        public removeAllAllMobs(): number /*int*/
                        // @ts-ignore
                        public despawnAllMobs(): number /*int*/
                        // @ts-ignore
                        public setEntityDespawned(uniqueId: java.util.UUID): void
                        // @ts-ignore
                        public ScanWorld(): void
                        // @ts-ignore
                        public registerActiveMob(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public registerActiveMob(l: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, mm: io.lumine.xikage.mythicmobs.mobs.MythicMob, level: number /*int*/): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public registerActiveMob(l: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public unregisterActiveMob(u: java.util.UUID): void
                        // @ts-ignore
                        public unregisterActiveMob(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                        // @ts-ignore
                        public getMythicMobInstance(target: Entity): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public verifyMythicMobInstance(e: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public cleanActiveMobs(): void
                        // @ts-ignore
                        public spawnMob(MobName: java.lang.String | string, loc: Location): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public spawnMob(MobName: java.lang.String | string, loc: Location, level: number /*int*/): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public SetupMythicMobCompat(l: LivingEntity, mm: io.lumine.xikage.mythicmobs.mobs.MythicMob): void
                        // @ts-ignore
                        public static findSafeSpawnLocation(b: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, radiusXZ: number /*int*/, radiusY: number /*int*/, mob_height: number /*int*/, Ymod: boolean, onSurface: boolean): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public static findSafeSpawnLocation(base: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, radiusXZ: number /*int*/, radiusY: number /*int*/, mob_height: number /*int*/, yMod: boolean): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public static findSafeSpawnLocation(base: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, radiusXZ: number /*int*/, radiusY: number /*int*/, mob_height: number /*int*/): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public static findSafeSpawnLocation(base: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, radius: number /*int*/, mob_height: number /*int*/): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public getMobsInCombat(): Array<io.lumine.xikage.mythicmobs.mobs.ActiveMob>
                        // @ts-ignore
                        public getInCombat(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): boolean
                        // @ts-ignore
                        public setInCombat(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, b: boolean): void
                        // @ts-ignore
                        public saveCachedActiveMobs(): void
                        // @ts-ignore
                        public getAllMythicEntities(): Array<LivingEntity>
                        // @ts-ignore
                        public getMythicMob(s: java.lang.String | string): io.lumine.xikage.mythicmobs.mobs.MythicMob
                        // @ts-ignore
                        public getMythicMobStack(s: java.lang.String | string): io.lumine.xikage.mythicmobs.mobs.MythicMobStack
                        // @ts-ignore
                        public static getMythicMobLevel(mm: io.lumine.xikage.mythicmobs.mobs.MythicMob, l: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): number /*int*/
                        // @ts-ignore
                        public static getMythicMobLevel(l: LivingEntity): number /*int*/
                        // @ts-ignore
                        public static setMetaData(abstractEntity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, s: java.lang.String | string, key: java.lang.String | string): void
                        // @ts-ignore
                        public static showHealth(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                        // @ts-ignore
                        public determineMobType(l: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.mobs.MythicMob
                        // @ts-ignore
                        public getMythicMobByDisplayCompat(l: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): io.lumine.xikage.mythicmobs.mobs.MythicMob
                        // @ts-ignore
                        public static convertMobTypeAliases(s: java.lang.String | string): string
                        // @ts-ignore
                        public getMobRegistry(): io.lumine.utils.serialization.WrappedJsonFile<io.lumine.xikage.mythicmobs.mobs.MobRegistry>
                    }
                }
            }
        }
    }
}
