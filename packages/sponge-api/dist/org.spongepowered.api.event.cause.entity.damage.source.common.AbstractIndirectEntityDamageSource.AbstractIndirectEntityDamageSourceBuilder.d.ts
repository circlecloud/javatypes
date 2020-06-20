declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace common {
                                    namespace AbstractIndirectEntityDamageSource {
                                        // @ts-ignore
                                        class AbstractIndirectEntityDamageSourceBuilder<T extends org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource, B extends org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource.AbstractBuilder<T, B>> extends org.spongepowered.api.event.cause.entity.damage.source.common.AbstractEntityDamageSource.AbstractEntityDamageSourceBuilder<T, B> implements org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource.AbstractBuilder<T, B> {
                                            // @ts-ignore
                                            constructor()
                                            // @ts-ignore
                                            sourceEntity: org.spongepowered.api.entity.Entity
                                            // @ts-ignore
                                            indirect: org.spongepowered.api.entity.Entity
                                            // @ts-ignore
                                            entity(entity: org.spongepowered.api.entity.Entity): B
                                            // @ts-ignore
                                            proxySource(projectile: org.spongepowered.api.entity.Entity): B
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
}
