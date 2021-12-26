declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    // @ts-ignore
                    interface SkillCaster {
                        // @ts-ignore
                        getEntity(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        getLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        setUsingDamageSkill(p0: boolean): void
                        // @ts-ignore
                        isUsingDamageSkill(): boolean
                        // @ts-ignore
                        getLevel(): number /*int*/
                        // @ts-ignore
                        getPower(): number /*float*/
                        // @ts-ignore
                        getGlobalCooldown(): number /*int*/
                        // @ts-ignore
                        setGlobalCooldown(ticks: number /*int*/): void
                        // @ts-ignore
                        getAuraRegistry(): io.lumine.xikage.mythicmobs.skills.auras.AuraRegistry
                        // @ts-ignore
                        registerAura(buffName: java.lang.String | string, buff: io.lumine.xikage.mythicmobs.skills.auras.Aura.AuraTracker): void
                        // @ts-ignore
                        unregisterAura(buffName: java.lang.String | string, buff: io.lumine.xikage.mythicmobs.skills.auras.Aura.AuraTracker): void
                        // @ts-ignore
                        hasAura(auraName: java.lang.String | string): boolean
                        // @ts-ignore
                        getAuraStacks(auraName: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        addChild(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        getChildren(): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                    }
                }
            }
        }
    }
}
