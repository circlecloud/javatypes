declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                namespace common {
                                    // @ts-ignore
                                    abstract class AbstractHealingSourceBuilder<T extends org.spongepowered.api.event.cause.entity.health.source.HealingSource, B extends org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder<T, B>> extends java.lang.Object implements org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder<T, B> {
                                        // @ts-ignore
                                        constructor()
                                        // @ts-ignore
                                        scales: boolean
                                        // @ts-ignore
                                        healingType: org.spongepowered.api.event.cause.entity.health.HealingType
                                        // @ts-ignore
                                        public scalesWithDifficulty(): B
                                        // @ts-ignore
                                        public magical(): B
                                        // @ts-ignore
                                        public type(healingType: org.spongepowered.api.event.cause.entity.health.HealingType): B
                                        // @ts-ignore
                                        public from(value: T): B
                                        // @ts-ignore
                                        public reset(): B
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
