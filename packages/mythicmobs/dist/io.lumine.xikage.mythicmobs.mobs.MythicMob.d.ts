declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace mobs {
                    // @ts-ignore
                    class MythicMob extends java.lang.Object implements java.lang.Comparable<io.lumine.xikage.mythicmobs.mobs.MythicMob> {
                        // @ts-ignore
                        constructor(file: java.lang.String | string, internalName: java.lang.String | string, mc: io.lumine.xikage.mythicmobs.io.MythicConfig)
                        // @ts-ignore
                        displayName: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        mobType: io.lumine.xikage.mythicmobs.mobs.entities.MythicEntity
                        // @ts-ignore
                        mPetType: java.util.Optional<io.lumine.xikage.mythicmobs.compatibility.MPetCompat.MiniaturePetType>
                        // @ts-ignore
                        optionDespawn: boolean
                        // @ts-ignore
                        optionPersistent: boolean
                        // @ts-ignore
                        optionShowHealthInChat: boolean
                        // @ts-ignore
                        strMobType: java.lang.String | string
                        // @ts-ignore
                        faction: java.lang.String | string
                        // @ts-ignore
                        health: number /*double*/
                        // @ts-ignore
                        damage: number /*double*/
                        // @ts-ignore
                        armor: number /*double*/
                        // @ts-ignore
                        attrMovementSpeed: number /*double*/
                        // @ts-ignore
                        attrKnockbackResist: number /*double*/
                        // @ts-ignore
                        attrFollowRange: number /*double*/
                        // @ts-ignore
                        attrAttackSpeed: number /*double*/
                        // @ts-ignore
                        lvlModDamage: number /*double*/
                        // @ts-ignore
                        lvlModHealth: number /*double*/
                        // @ts-ignore
                        lvlModArmor: number /*double*/
                        // @ts-ignore
                        lvlModKBR: number /*double*/
                        // @ts-ignore
                        lvlModPower: number /*double*/
                        // @ts-ignore
                        lvlModSpeed: number /*double*/
                        // @ts-ignore
                        lvlModAttackSpeed: number /*double*/
                        // @ts-ignore
                        optionSilent: boolean
                        // @ts-ignore
                        optionNoAI: boolean
                        // @ts-ignore
                        optionGlowing: boolean
                        // @ts-ignore
                        optionInvincible: boolean
                        // @ts-ignore
                        optionCollidable: boolean
                        // @ts-ignore
                        optionNoGravity: boolean
                        // @ts-ignore
                        optionInteractable: boolean
                        // @ts-ignore
                        useBossBar: boolean
                        // @ts-ignore
                        bossBarRange: number /*int*/
                        // @ts-ignore
                        bossBarRangeSq: number /*int*/
                        // @ts-ignore
                        bossBarTitle: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        bossBarColor: io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarColor
                        // @ts-ignore
                        bossBarStyle: io.lumine.xikage.mythicmobs.adapters.AbstractBossBar.BarStyle
                        // @ts-ignore
                        bossBarCreateFog: boolean
                        // @ts-ignore
                        bossBarDarkenSky: boolean
                        // @ts-ignore
                        bossBarPlayMusic: boolean
                        // @ts-ignore
                        mount: java.util.Optional<java.lang.String | string>
                        // @ts-ignore
                        rider: java.util.Optional<java.lang.String | string>
                        // @ts-ignore
                        public legacyTimerSkills: java.util.List<io.lumine.xikage.mythicmobs.legacy.LegacyMythicTimerSkill> | Array<io.lumine.xikage.mythicmobs.legacy.LegacyMythicTimerSkill>
                        // @ts-ignore
                        public usingTimers: boolean
                        // @ts-ignore
                        spawnVelocityX: number /*double*/
                        // @ts-ignore
                        spawnVelocityXMax: number /*double*/
                        // @ts-ignore
                        spawnVelocityY: number /*double*/
                        // @ts-ignore
                        spawnVelocityYMax: number /*double*/
                        // @ts-ignore
                        spawnVelocityZ: number /*double*/
                        // @ts-ignore
                        spawnVelocityZMax: number /*double*/
                        // @ts-ignore
                        spawnVelocityXRange: boolean
                        // @ts-ignore
                        spawnVelocityYRange: boolean
                        // @ts-ignore
                        spawnVelocityZRange: boolean
                        // @ts-ignore
                        killMessages: java.util.List<io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString> | Array<io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString>
                        // @ts-ignore
                        public disguise: java.lang.String | string
                        // @ts-ignore
                        public getConfig(): io.lumine.xikage.mythicmobs.io.MythicConfig
                        // @ts-ignore
                        public spawn(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, level: number /*int*/): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public applyMobOptions(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, level: number /*int*/): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public applyMobVolatileOptions(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public applySpawnModifiers(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public executeSkills(cause: io.lumine.xikage.mythicmobs.skills.SkillTrigger, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): void
                        // @ts-ignore
                        public executeSignalSkill(signal: java.lang.String | string, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): void
                        // @ts-ignore
                        public getInternalName(): string
                        // @ts-ignore
                        public getFile(): string
                        // @ts-ignore
                        public getDisplayName(): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        public getEntityType(): string
                        // @ts-ignore
                        public getMythicEntity(): io.lumine.xikage.mythicmobs.mobs.entities.MythicEntity
                        // @ts-ignore
                        public getDespawns(): boolean
                        // @ts-ignore
                        public isPersistent(): boolean
                        // @ts-ignore
                        public getBaseHealth(): number /*double*/
                        // @ts-ignore
                        public setBaseHealth(health: number /*double*/): void
                        // @ts-ignore
                        public getPerLevelHealth(): number /*double*/
                        // @ts-ignore
                        public getBaseDamage(): number /*double*/
                        // @ts-ignore
                        public getPerLevelDamage(): number /*double*/
                        // @ts-ignore
                        public getPerLevelPower(): number /*double*/
                        // @ts-ignore
                        public getBaseArmor(): number /*double*/
                        // @ts-ignore
                        public getPerLevelArmor(): number /*double*/
                        // @ts-ignore
                        public getMovementSpeed(level: number /*int*/): number /*double*/
                        // @ts-ignore
                        public getKnockbackResistance(level: number /*int*/): number /*double*/
                        // @ts-ignore
                        public getAttackSpeed(level: number /*int*/): number /*double*/
                        // @ts-ignore
                        public hasFaction(): boolean
                        // @ts-ignore
                        public getFaction(): string
                        // @ts-ignore
                        public getHealth(): number /*double*/
                        // @ts-ignore
                        public getIsInvincible(): boolean
                        // @ts-ignore
                        public usesThreatTable(): boolean
                        // @ts-ignore
                        public usesImmunityTable(): boolean
                        // @ts-ignore
                        public getThreatTableUseDamageTaken(): boolean
                        // @ts-ignore
                        public getThreatTableDecaysUnreachable(): boolean
                        // @ts-ignore
                        public getSkills(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getDamageModifiers(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getEntityDamageModifiers(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getLevelModifiers(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getAIGoalSelectors(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getAITargetSelectors(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getSkills(st: io.lumine.xikage.mythicmobs.skills.SkillTrigger): java.util.Queue<io.lumine.xikage.mythicmobs.skills.SkillMechanic>
                        // @ts-ignore
                        public getTimerSkills(): java.util.Queue<io.lumine.xikage.mythicmobs.skills.SkillMechanic>
                        // @ts-ignore
                        public hasKillMessages(): boolean
                        // @ts-ignore
                        public getKillMessage(): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        public getSpawnVelocityX(): number /*double*/
                        // @ts-ignore
                        public getSpawnVelocityY(): number /*double*/
                        // @ts-ignore
                        public getSpawnVelocityZ(): number /*double*/
                        // @ts-ignore
                        public getIsInteractable(): boolean
                        // @ts-ignore
                        public usesBossBar(): boolean
                        // @ts-ignore
                        public getBossBarRangeSquared(): number /*int*/
                        // @ts-ignore
                        public getBossBar(): java.util.Optional<io.lumine.xikage.mythicmobs.adapters.AbstractBossBar>
                        // @ts-ignore
                        public getBossBarTitle(): io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderString
                        // @ts-ignore
                        public equals(o: java.lang.Object | any): boolean
                        // @ts-ignore
                        public toString(): string
                        // @ts-ignore
                        public compareTo(mm: io.lumine.xikage.mythicmobs.mobs.MythicMob): number /*int*/
                        // @ts-ignore
                        public getShowHealthInChat(): boolean
                        // @ts-ignore
                        public getShowNameOnDamaged(): boolean
                        // @ts-ignore
                        public getDrops(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getDropTable(): io.lumine.xikage.mythicmobs.drops.DropTable
                        // @ts-ignore
                        public getEquipment(): Array<java.lang.String | string>
                        // @ts-ignore
                        public getEquipmentTable(): io.lumine.xikage.mythicmobs.drops.DropTable
                        // @ts-ignore
                        public getNoDamageTicks(): number /*int*/
                        // @ts-ignore
                        public getMaxAttackRange(): number /*int*/
                        // @ts-ignore
                        public getMaxAttackableRange(): number /*int*/
                        // @ts-ignore
                        public getMaxThreatDistance(): number /*int*/
                        // @ts-ignore
                        public isUseCustomNameplate(): boolean
                        // @ts-ignore
                        public getRepeatAllSkills(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventOtherDrops(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventRandomEquipment(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventLeashing(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventRename(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventSlimeSplit(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventEndermanTeleport(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventItemPickup(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventSilverfishInfection(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventSunburn(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventExploding(): java.lang.Boolean
                        // @ts-ignore
                        public getPreventMobKillDrops(): java.lang.Boolean
                        // @ts-ignore
                        public getPassthroughDamage(): java.lang.Boolean
                        // @ts-ignore
                        public getDigOutOfGround(): java.lang.Boolean
                        // @ts-ignore
                        public getUsesHealthBar(): java.lang.Boolean
                        // @ts-ignore
                        public getSpawnVelocityXMax(): number /*double*/
                        // @ts-ignore
                        public getSpawnVelocityYMax(): number /*double*/
                        // @ts-ignore
                        public getSpawnVelocityZMax(): number /*double*/
                        // @ts-ignore
                        public isSpawnVelocityXRange(): boolean
                        // @ts-ignore
                        public isSpawnVelocityYRange(): boolean
                        // @ts-ignore
                        public isSpawnVelocityZRange(): boolean
                        // @ts-ignore
                        public isFakePlayer(): boolean
                    }
                }
            }
        }
    }
}
