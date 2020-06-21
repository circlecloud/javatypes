declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace potion {
                    /**
                     * Represents an effect of a {@link PotionEffectType} for a specified
                     * {@link #getDuration()}, {@link #getAmplifier()}, and
                     * {@link #getShowParticles()}. The {@link PotionEffect} itself is immutable
                     * once created and can be offered to {@link Entity} instances through
                     * the {@link PotionEffectData}.
                     */
                    // @ts-ignore
                    interface PotionEffect extends org.spongepowered.api.data.DataSerializable, org.spongepowered.api.data.property.PropertyHolder {
                        /**
                         * Creates a new {@link Builder} to build a {@link PotionEffect}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.effect.potion.PotionEffect.Builder
                        /**
                         * Creates a new {@link PotionEffect} with the provided
                         * {@link PotionEffectType}, the provided amplifier, and the provided
                         * duration in ticks.
                         * @param type The potion type
                         * @param amplifier The amplifier
                         * @param duration The duration in ticks
                         * @return The potion effect
                         */
                        // @ts-ignore
                        of(type: org.spongepowered.api.effect.potion.PotionEffectType, amplifier: number /*int*/, duration: number /*int*/): org.spongepowered.api.effect.potion.PotionEffect
                        /**
                         * Gets the {@link PotionEffectType} of this potion.
                         * @return The type.
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.effect.potion.PotionEffectType
                        /**
                         * Gets the duration in ticks for which this potion effect
                         * will apply for.
                         * @return The duration.
                         */
                        // @ts-ignore
                        getDuration(): number /*int*/
                        /**
                         * Gets the amplifier at which this potion effect
                         * will apply effects.
                         * @return The amplifier.
                         */
                        // @ts-ignore
                        getAmplifier(): number /*int*/
                        /**
                         * Gets if the potion effect is an ambient effect.
                         * @return Gets if ambient.
                         */
                        // @ts-ignore
                        isAmbient(): boolean
                        /**
                         * Gets whether or not this potion effect should
                         * show particles.
                         * @return If particles should be shown.
                         */
                        // @ts-ignore
                        getShowParticles(): boolean
                    }
                }
            }
        }
    }
}
