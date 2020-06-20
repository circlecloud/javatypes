declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                namespace IndirectEntityHealingSource {
                                    // @ts-ignore
                                    interface IndirectEntityHealingSourceBuilder<T extends org.spongepowered.api.event.cause.entity.health.source.IndirectEntityHealingSource, B extends org.spongepowered.api.event.cause.entity.health.source.IndirectEntityHealingSource.IndirectEntityHealingSourceBuilder<T, B>> extends org.spongepowered.api.event.cause.entity.health.source.EntityHealingSource.EntityHealingSourceBuilder<T, B> {
                                        /**
                                         * Sets the indirect {@link Entity} that is providing healing.
                                         * @param entity The entity that is indirectly providing healing
                                         * @return This builder, for chaining
                                         */
                                        // @ts-ignore
                                        indirectEntity(entity: org.spongepowered.api.entity.Entity): B
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
