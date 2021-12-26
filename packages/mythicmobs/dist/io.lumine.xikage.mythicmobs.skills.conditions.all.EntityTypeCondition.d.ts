declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace conditions {
                        namespace all {
                            // @ts-ignore
                            class EntityTypeCondition extends io.lumine.xikage.mythicmobs.skills.SkillCondition implements io.lumine.xikage.mythicmobs.skills.conditions.IEntityCondition {
                                // @ts-ignore
                                constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                                // @ts-ignore
                                types: java.util.Set<EntityType> | Array<EntityType>
                                // @ts-ignore
                                public check(e: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
