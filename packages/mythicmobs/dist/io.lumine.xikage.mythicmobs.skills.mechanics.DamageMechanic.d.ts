declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class DamageMechanic extends io.lumine.xikage.mythicmobs.skills.damage.DamagingMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            amount: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderDouble
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        }
                    }
                }
            }
        }
    }
}
