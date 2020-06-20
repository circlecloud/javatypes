declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace potion {
                    namespace PotionEffect {
                        /**
                         * Represents a builder interface to create a {@link PotionEffect}.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.effect.potion.PotionEffect> {
                            // @ts-ignore
                            from(potionEffect: org.spongepowered.api.effect.potion.PotionEffect): org.spongepowered.api.effect.potion.PotionEffect.Builder
                            /**
                             * Sets the {@link PotionEffectType} of the potion.
                             * @param potionEffectType The type of item
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            potionType(potionEffectType: org.spongepowered.api.effect.potion.PotionEffectType): org.spongepowered.api.effect.potion.PotionEffect.Builder
                            /**
                             * Sets the duration in ticks of the potion effect.
                             * @param duration The duration in ticks of this effect
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            duration(duration: number /*int*/): org.spongepowered.api.effect.potion.PotionEffect.Builder
                            /**
                             * Sets the amplifier power of the potion effect.
                             * <p>Amplifiers must be above zero.</p>
                             * @param amplifier The amplifier power
                             * @return This builder, for chaining
                             * @throws IllegalArgumentException If the amplifier is less than zero
                             */
                            // @ts-ignore
                            amplifier(amplifier: number /*int*/): org.spongepowered.api.effect.potion.PotionEffect.Builder
                            /**
                             * Sets the potion effect to be ambient or not.
                             * @param ambience Whether the potion effect is ambient
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            ambience(ambience: boolean): org.spongepowered.api.effect.potion.PotionEffect.Builder
                            /**
                             * Sets the potion effect to show particles when applied or not.
                             * @param showsParticles Whether the potion effect will show particles
                             * @return This builder, for chaining
                             */
                            // @ts-ignore
                            particles(showsParticles: boolean): org.spongepowered.api.effect.potion.PotionEffect.Builder
                            /**
                             * Builds an instance of a PotionEffect.
                             * @return A new instance of a PotionEffect
                             * @throws IllegalStateException If the potion effect is not completed
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.effect.potion.PotionEffect
                            // @ts-ignore
                            reset(): org.spongepowered.api.effect.potion.PotionEffect.Builder
                        }
                    }
                }
            }
        }
    }
}
