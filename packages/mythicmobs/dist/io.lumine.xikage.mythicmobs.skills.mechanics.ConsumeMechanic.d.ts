declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class ConsumeMechanic extends io.lumine.xikage.mythicmobs.skills.damage.DamagingMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            damage: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderFloat
                            // @ts-ignore
                            heal: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderFloat
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        }
                    }
                }
            }
        }
    }
}
