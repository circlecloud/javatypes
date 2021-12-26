declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace conditions {
                        namespace all {
                            // @ts-ignore
                            class DistanceCondition extends io.lumine.xikage.mythicmobs.skills.SkillCondition implements io.lumine.xikage.mythicmobs.skills.conditions.IEntityComparisonCondition, io.lumine.xikage.mythicmobs.skills.conditions.ILocationComparisonCondition {
                                // @ts-ignore
                                constructor(line: java.lang.String | string, mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                                // @ts-ignore
                                distance: io.lumine.xikage.mythicmobs.util.types.RangedDouble
                                // @ts-ignore
                                public check(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                                // @ts-ignore
                                public check(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
