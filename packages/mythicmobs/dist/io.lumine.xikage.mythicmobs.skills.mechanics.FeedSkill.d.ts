declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        // @ts-ignore
                        class FeedSkill extends io.lumine.xikage.mythicmobs.skills.SkillMechanic implements io.lumine.xikage.mythicmobs.skills.ITargetedEntitySkill {
                            // @ts-ignore
                            constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            static noloop: boolean
                            // @ts-ignore
                            amount: io.lumine.xikage.mythicmobs.skills.placeholders.parsers.PlaceholderInt
                            // @ts-ignore
                            saturation: number /*float*/
                            // @ts-ignore
                            maxSaturation: number /*float*/
                            // @ts-ignore
                            overfeed: boolean
                            // @ts-ignore
                            public castAtEntity(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        }
                    }
                }
            }
        }
    }
}
