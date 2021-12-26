declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace mobs {
                    // @ts-ignore
                    class ActiveMob extends java.lang.Object implements io.lumine.xikage.mythicmobs.skills.SkillCaster {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        constructor(uuid: java.util.UUID, e: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, type: io.lumine.xikage.mythicmobs.mobs.MythicMob, level: number /*int*/)
                        // @ts-ignore
                        public cooldowns: java.util.HashMap<java.lang.String | string, java.lang.Long | number>
                        // @ts-ignore
                        lastAggroCause: io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        spawner: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner
                        // @ts-ignore
                        healthbar: io.lumine.xikage.mythicmobs.holograms.types.HealthBar
                        // @ts-ignore
                        nameplate: io.lumine.xikage.mythicmobs.holograms.types.Nameplate
                        // @ts-ignore
                        speechBubble: io.lumine.xikage.mythicmobs.holograms.types.SpeechBubble
                        // @ts-ignore
                        public loadSaved(): boolean
                        // @ts-ignore
                        public tick(c: number /*int*/): void
                        // @ts-ignore
                        public getEntity(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        public getLivingEntity(): LivingEntity
                        // @ts-ignore
                        public setEntity(e: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public getType(): io.lumine.xikage.mythicmobs.mobs.MythicMob
                        // @ts-ignore
                        public getDisplayName(): string
                        // @ts-ignore
                        public getLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public setParent(am: io.lumine.xikage.mythicmobs.skills.SkillCaster): void
                        // @ts-ignore
                        public addChild(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public setOwner(uuid: java.util.UUID): void
                        // @ts-ignore
                        public removeOwner(): void
                        // @ts-ignore
                        public setMount(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                        // @ts-ignore
                        public getMount(): java.util.Optional<io.lumine.xikage.mythicmobs.mobs.ActiveMob>
                        // @ts-ignore
                        public remountType(): void
                        // @ts-ignore
                        public getDamage(): number /*double*/
                        // @ts-ignore
                        public getArmor(): number /*double*/
                        // @ts-ignore
                        public setLevel(level: number /*int*/): void
                        // @ts-ignore
                        public getLevel(): number /*int*/
                        // @ts-ignore
                        public getPower(): number /*float*/
                        // @ts-ignore
                        public getNoDamageTicks(): number /*int*/
                        // @ts-ignore
                        public getUniqueId(): java.util.UUID
                        // @ts-ignore
                        public getGlobalCooldown(): number /*int*/
                        // @ts-ignore
                        public setGlobalCooldown(gcd: number /*int*/): void
                        // @ts-ignore
                        public hasFaction(): boolean
                        // @ts-ignore
                        public getFaction(): string
                        // @ts-ignore
                        public setFaction(faction: java.lang.String | string): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                        // @ts-ignore
                        public getPlayerKills(): number /*int*/
                        // @ts-ignore
                        public incrementPlayerKills(): void
                        // @ts-ignore
                        public importPlayerKills(pk: number /*int*/): void
                        // @ts-ignore
                        public setLastAggroCause(aggro: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public getLastAggroCause(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        public hasTarget(): boolean
                        // @ts-ignore
                        public setTarget(l: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public changingTarget(): boolean
                        // @ts-ignore
                        public getNewTarget(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        public voidTargetChange(): void
                        // @ts-ignore
                        public resetTarget(): void
                        // @ts-ignore
                        public hasThreatTable(): boolean
                        // @ts-ignore
                        public getThreatTable(): io.lumine.xikage.mythicmobs.mobs.ActiveMob.ThreatTable
                        // @ts-ignore
                        public importThreatTable(tt: io.lumine.xikage.mythicmobs.mobs.ActiveMob.ThreatTable): void
                        // @ts-ignore
                        public hasImmunityTable(): boolean
                        // @ts-ignore
                        public getImmunityTable(): io.lumine.xikage.mythicmobs.mobs.ActiveMob.ImmunityTable
                        // @ts-ignore
                        public setDespawned(): void
                        // @ts-ignore
                        public setDespawnedSync(): void
                        // @ts-ignore
                        public setDead(): void
                        // @ts-ignore
                        public setUnloaded(): void
                        // @ts-ignore
                        public isDead(): boolean
                        // @ts-ignore
                        public unregister(): void
                        // @ts-ignore
                        public setUsingDamageSkill(b: boolean): void
                        // @ts-ignore
                        public isUsingDamageSkill(): boolean
                        // @ts-ignore
                        public setLastDamageSkillAmount(d: number /*double*/): void
                        // @ts-ignore
                        public getLastDamageSkillAmount(): number /*double*/
                        // @ts-ignore
                        public setSpawner(ms: io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner): void
                        // @ts-ignore
                        public getSpawner(): io.lumine.xikage.mythicmobs.spawning.spawners.MythicSpawner
                        // @ts-ignore
                        public remountSpawner(): void
                        // @ts-ignore
                        public signalMob(trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, signal: java.lang.String | string): void
                        // @ts-ignore
                        public signalDamaged(): void
                        // @ts-ignore
                        public getLastSignal(): string
                        // @ts-ignore
                        public getAuraRegistry(): io.lumine.xikage.mythicmobs.skills.auras.AuraRegistry
                        // @ts-ignore
                        public updateBossBar(): void
                        // @ts-ignore
                        public getShowCustomNameplate(): boolean
                        // @ts-ignore
                        public setShowCustomNameplate(b: boolean): void
                        // @ts-ignore
                        public createSpeechBubble(): io.lumine.xikage.mythicmobs.holograms.types.SpeechBubble
                        // @ts-ignore
                        public removeSpeechBubble(): void
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public getSpawnLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        public getStance(): string
                        // @ts-ignore
                        public setStance(stance: java.lang.String | string): void
                        // @ts-ignore
                        public getOwner(): java.util.Optional<java.util.UUID>
                        // @ts-ignore
                        public getVariables(): io.lumine.xikage.mythicmobs.skills.variables.VariableRegistry
                        // @ts-ignore
                        public getParent(): io.lumine.xikage.mythicmobs.skills.SkillCaster
                        // @ts-ignore
                        public getChildren(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        // @ts-ignore
                        public getSpeechBubble(): io.lumine.xikage.mythicmobs.holograms.types.SpeechBubble
                    }
                }
            }
        }
    }
}
