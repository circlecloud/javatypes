declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    // @ts-ignore
                    class TriggeredSkill extends java.lang.Object implements io.lumine.xikage.mythicmobs.skills.IParentSkill {
                        // @ts-ignore
                        constructor(cause: io.lumine.xikage.mythicmobs.skills.SkillTrigger, am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, ...metadata: object[])
                        // @ts-ignore
                        constructor(cause: io.lumine.xikage.mythicmobs.skills.SkillTrigger, am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, sync: boolean, ...metadata: object[])
                        // @ts-ignore
                        constructor(cause: io.lumine.xikage.mythicmobs.skills.SkillTrigger, am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, sync: boolean, transformer: java.util.function$.Consumer<io.lumine.xikage.mythicmobs.skills.SkillMetadata>, ...metadata: object[])
                        // @ts-ignore
                        constructor(cause: io.lumine.xikage.mythicmobs.skills.SkillTrigger, am: io.lumine.xikage.mythicmobs.skills.SkillCaster, origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, mechanics: java.util.Collection<io.lumine.xikage.mythicmobs.skills.SkillMechanic> | Array<io.lumine.xikage.mythicmobs.skills.SkillMechanic>, sync: boolean, ...metadata: object[])
                        // @ts-ignore
                        constructor(cause: io.lumine.xikage.mythicmobs.skills.SkillTrigger, am: io.lumine.xikage.mythicmobs.skills.SkillCaster, origin: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, trigger: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, mechanics: java.util.Collection<io.lumine.xikage.mythicmobs.skills.SkillMechanic> | Array<io.lumine.xikage.mythicmobs.skills.SkillMechanic>, sync: boolean, transformer: java.util.function$.Consumer<io.lumine.xikage.mythicmobs.skills.SkillMetadata>, ...metadata: object[])
                        // @ts-ignore
                        public setCancelled(): void
                        // @ts-ignore
                        public getCancelled(): boolean
                        // @ts-ignore
                        public getData(): io.lumine.xikage.mythicmobs.skills.SkillMetadata
                    }
                }
            }
        }
    }
}
