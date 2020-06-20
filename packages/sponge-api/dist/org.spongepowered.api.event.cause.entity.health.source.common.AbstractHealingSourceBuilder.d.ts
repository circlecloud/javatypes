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
                                    class AbstractHealingSourceBuilder<T extends org.spongepowered.api.event.cause.entity.health.source.HealingSource, B extends org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder<T, B>> extends java.lang.Object implements org.spongepowered.api.event.cause.entity.health.source.HealingSource.HealingSourceBuilder<T, B> {
                                        // @ts-ignore
                                        constructor()
                                        // @ts-ignore
                                        scales: boolean
                                        // @ts-ignore
                                        healingType: org.spongepowered.api.event.cause.entity.health.HealingType
                                        // @ts-ignore
                                        scalesWithDifficulty(): B
                                        // @ts-ignore
                                        magical(): B
                                        // @ts-ignore
                                        type(healingType: org.spongepowered.api.event.cause.entity.health.HealingType): B
                                        // @ts-ignore
                                        from(value: T extends org.spongepowered.api.event.cause.entity.health.source.HealingSource): B
                                        // @ts-ignore
                                        reset(): B
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
