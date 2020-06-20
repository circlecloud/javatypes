declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                /**
                                 * Signifies that the healing source is another entity, can usually mean
                                 * that the healing source is the same entity being healed. Examples may
                                 * include self healing from {@link Boss} entities, {@link Witch}es, etc.
                                 */
                                // @ts-ignore
                                interface EntityHealingSource extends org.spongepowered.api.event.cause.entity.health.source.HealingSource {
                                    /**
                                     * Gets a new builder to build a new {@link EntityHealingSource}.
                                     * @return The new builder
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.event.cause.entity.health.source.EntityHealingSource.Builder
                                    /**
                                     * Gets the source entity acting as the healing source.
                                     * @return The source entity
                                     */
                                    // @ts-ignore
                                    getSource(): org.spongepowered.api.entity.Entity
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
