declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace targeters {
                        // @ts-ignore
                        abstract class ILocationSelector extends io.lumine.xikage.mythicmobs.skills.SkillTargeter {
                            // @ts-ignore
                            constructor(mlc: io.lumine.xikage.mythicmobs.io.MythicLineConfig)
                            // @ts-ignore
                            public abstract getLocations(p0: io.lumine.xikage.mythicmobs.skills.SkillMetadata): java.util.HashSet<io.lumine.xikage.mythicmobs.adapters.AbstractLocation>
                            // @ts-ignore
                            public filter(data: io.lumine.xikage.mythicmobs.skills.SkillMetadata): void
                            // @ts-ignore
                            public mutate(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        }
                    }
                }
            }
        }
    }
}
