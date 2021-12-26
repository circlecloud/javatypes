declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace skills {
                    namespace mechanics {
                        namespace CastMechanic {
                            // @ts-ignore
                            class CastTracker extends io.lumine.xikage.mythicmobs.skills.auras.Aura.AuraTracker {
                                // @ts-ignore
                                constructor(target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata)
                                // @ts-ignore
                                constructor(target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, data: io.lumine.xikage.mythicmobs.skills.SkillMetadata)
                                // @ts-ignore
                                public auraStart(): void
                                // @ts-ignore
                                public auraTick(): void
                                // @ts-ignore
                                public auraStop(): void
                                // @ts-ignore
                                public onCast(): void
                                // @ts-ignore
                                public onInterrupted(): void
                            }
                        }
                    }
                }
            }
        }
    }
}
