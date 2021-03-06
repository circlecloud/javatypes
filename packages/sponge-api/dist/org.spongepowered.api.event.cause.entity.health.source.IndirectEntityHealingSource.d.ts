declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                // @ts-ignore
                                interface IndirectEntityHealingSource extends org.spongepowered.api.event.cause.entity.health.source.EntityHealingSource {
                                    /**
                                     * Creates a new {@link Builder} for constructing an {@link IndirectEntityHealingSource}.
                                     * @return A new builder
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.event.cause.entity.health.source.IndirectEntityHealingSource.Builder
                                    /**
                                     * Gets the {@link Entity} indirect source of healing.
                                     * @return The entity that is indirectly healing
                                     */
                                    // @ts-ignore
                                    getIndirectSource(): org.spongepowered.api.entity.Entity
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
