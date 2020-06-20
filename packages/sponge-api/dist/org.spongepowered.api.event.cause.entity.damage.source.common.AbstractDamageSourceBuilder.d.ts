declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace common {
                                    // @ts-ignore
                                    class AbstractDamageSourceBuilder<T extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource, B extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder<T, B>> extends java.lang.Object implements org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder<T, B> {
                                        // @ts-ignore
                                        constructor()
                                        // @ts-ignore
                                        scales: boolean
                                        // @ts-ignore
                                        bypasses: boolean
                                        // @ts-ignore
                                        damageType: org.spongepowered.api.event.cause.entity.damage.DamageType
                                        // @ts-ignore
                                        scalesWithDifficulty(): B
                                        // @ts-ignore
                                        bypassesArmor(): B
                                        // @ts-ignore
                                        explosion(): B
                                        // @ts-ignore
                                        absolute(): B
                                        // @ts-ignore
                                        magical(): B
                                        // @ts-ignore
                                        creative(): B
                                        // @ts-ignore
                                        exhaustion(exhaustion: number /*double*/): B
                                        // @ts-ignore
                                        type(damageType: org.spongepowered.api.event.cause.entity.damage.DamageType): B
                                        // @ts-ignore
                                        from(value: T extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource): B
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
