declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                namespace EntityDamageSource {
                                    // @ts-ignore
                                    interface EntityDamageSourceBuilder<T extends org.spongepowered.api.event.cause.entity.damage.source.EntityDamageSource, B extends org.spongepowered.api.event.cause.entity.damage.source.EntityDamageSource.EntityDamageSourceBuilder<T, B>> extends org.spongepowered.api.event.cause.entity.damage.source.DamageSource.DamageSourceBuilder<T, B> {
                                        /**
                                         * Sets the {@link Entity} as the damage "source".
                                         * @param entity The entity
                                         * @return This builder, for chaining
                                         */
                                        // @ts-ignore
                                        entity(entity: org.spongepowered.api.entity.Entity): B
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
