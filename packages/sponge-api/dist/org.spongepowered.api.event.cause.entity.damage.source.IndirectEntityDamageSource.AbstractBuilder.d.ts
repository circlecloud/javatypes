declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace IndirectEntityDamageSource {
                                    // @ts-ignore
                                    interface AbstractBuilder<T extends org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource, B extends org.spongepowered.api.event.cause.entity.damage.source.IndirectEntityDamageSource.AbstractBuilder<T, B>> extends org.spongepowered.api.event.cause.entity.damage.source.EntityDamageSource.EntityDamageSourceBuilder<T, B> {
                                        /**
                                         * Sets the {@link Entity} that is indirectly damaging.
                                         * @param proxy The indirect entity
                                         * @return This builder, for chaining
                                         */
                                        // @ts-ignore
                                        proxySource(proxy: org.spongepowered.api.entity.Entity): B
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
