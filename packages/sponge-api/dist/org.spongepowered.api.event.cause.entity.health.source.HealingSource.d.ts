declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            namespace source {
                                /**
                                 * Represents a {@link Cause} for damage on the {@link Entity} being
                                 * healed. This will help inform what type of healing
                                 */
                                // @ts-ignore
                                interface HealingSource {
                                    /**
                                     * Creates a new {@link Builder} to construct a new {@link HealingSource}.
                                     * @return A new builder
                                     */
                                    // @ts-ignore
                                    builder(): org.spongepowered.api.event.cause.entity.health.source.HealingSource.Builder
                                    /**
                                     * Gets the {@link HealingType} for this source.
                                     * @return The healing type for this source
                                     */
                                    // @ts-ignore
                                    getHealingType(): org.spongepowered.api.event.cause.entity.health.HealingType
                                    /**
                                     * Gets whether this {@link HealingSource}'s healing amount is scaled by
                                     * {@link Difficulty}.
                                     * @return True if the damage from this source is scaled
                                     */
                                    // @ts-ignore
                                    isDifficultyScaled(): boolean
                                    /**
                                     * Gets whether this {@link HealingSource} is considered to be magical
                                     * healing, such as potions, or other sources.
                                     * @return If this healing is magic based
                                     */
                                    // @ts-ignore
                                    isMagic(): boolean
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
