declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            namespace source {
                                /**
                                 * A static collection of various {@link DamageSource}s that remain static, or
                                 * otherwise "ambiguous" with regards to the actual source. Examples include:
                                 * in the event an {@link Entity} is being damaged due to falling through the
                                 * "void", an {@link Entity} being damaged for being "on fire" in which case
                                 * an {@link IgniteableData} may be present from the {@link Entity}, etc.
                                 * <p>{@link DamageSource}s that rely on live instances of various objects,
                                 * including other {@link Entity} instances, or a block at a specific
                                 * {@link Location} rely on the various other types of {@link DamageSource}s.
                                 * </p>
                                 */
                                // @ts-ignore
                                class DamageSources extends java.lang.Object {
                                    /**
                                     * Generally used to describe the damage taken when by the dragon breath attack.
                                     */
                                    // @ts-ignore
                                    readonly DRAGON_BREATH: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly DROWNING: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly FALLING: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly FIRE_TICK: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly GENERIC: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly MAGIC: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly MELTING: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly POISON: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly STARVATION: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly VOID: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                    // @ts-ignore
                                    readonly WITHER: org.spongepowered.api.event.cause.entity.damage.source.DamageSource
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
