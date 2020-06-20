declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                /**
                                 * A static collection of various {@link HealingSource}s that remain static, or
                                 * otherwise "ambiguous" with regards to the actual source. Examples include:
                                 * in the event an {@link Entity} is being damaged due to falling through the
                                 * "void", an {@link Entity} being damaged for being "on fire" in which case
                                 * an {@link IgniteableData} may be present from the {@link Entity}, etc.
                                 * <p>{@link HealingSource}s that rely on live instances of various objects,
                                 * including other {@link Entity} instances, or a block at a specific
                                 * {@link Location} rely on the various other types of {@link HealingSource}s.
                                 * </p>
                                 */
                                // @ts-ignore
                                class HealingSources extends java.lang.Object {
                                    // @ts-ignore
                                    readonly FOOD: org.spongepowered.api.event.cause.entity.health.source.HealingSource
                                    // @ts-ignore
                                    readonly GENERIC: org.spongepowered.api.event.cause.entity.health.source.HealingSource
                                    // @ts-ignore
                                    readonly MAGIC: org.spongepowered.api.event.cause.entity.health.source.HealingSource
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
