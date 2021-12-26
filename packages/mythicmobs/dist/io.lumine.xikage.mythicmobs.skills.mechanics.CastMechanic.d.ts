declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class CastMechanic extends io.lumine.xikage.mythicmobs.skills.auras.Aura implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill, io.lumine.xikage.mythicmobs.skills.ITargetedLocationSkill {
                            // @ts-ignore
                            constructor(skill: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            onCastSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onInterruptedSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onNoTargetsSkill: java.util.Optional<io.lumine.xikage.mythicmobs.skills.Skill>
                            // @ts-ignore
                            onCastSkillName: java.lang.String | string
                            // @ts-ignore
                            onInterruptedSkillName: java.lang.String | string
                            // @ts-ignore
                            onNoTargetsSkillName: java.lang.String | string
                            // @ts-ignore
                            cancelOnMove: boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public castAtLocation(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            // @ts-ignore
                            public failNoTargets(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): void
                        }
                    }
                }
            }
        }
    }
}
