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
                                    abstract class AbstractDamageSourceBuilder<T extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource, B extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder<T, B>> extends java.lang.Object implements org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder<T, B> {
                                        // @ts-ignore
                                        constructor()
                                        // @ts-ignore
                                        scales: boolean
                                        // @ts-ignore
                                        bypasses: boolean
                                        // @ts-ignore
                                        damageType: org.spongepowered.api.event.cause.entity.damage.DamageType
                                        // @ts-ignore
                                        public scalesWithDifficulty(): B
                                        // @ts-ignore
                                        public bypassesArmor(): B
                                        // @ts-ignore
                                        public explosion(): B
                                        // @ts-ignore
                                        public absolute(): B
                                        // @ts-ignore
                                        public magical(): B
                                        // @ts-ignore
                                        public creative(): B
                                        // @ts-ignore
                                        public exhaustion(exhaustion: number /*double*/): B
                                        // @ts-ignore
                                        public type(damageType: org.spongepowered.api.event.cause.entity.damage.DamageType): B
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
