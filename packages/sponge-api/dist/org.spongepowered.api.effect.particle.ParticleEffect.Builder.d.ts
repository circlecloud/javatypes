declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace particle {
                    namespace ParticleEffect {
                        /**
                         * Represents a builder to create a {@link ParticleEffect}.
                         */
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.effect.particle.ParticleEffect> {
                            // @ts-ignore
                            from(particleEffect: org.spongepowered.api.effect.particle.ParticleEffect): org.spongepowered.api.effect.particle.ParticleEffect.Builder
                            // @ts-ignore
                            reset(): org.spongepowered.api.effect.particle.ParticleEffect.Builder
                            /**
                             * Sets the particle type for the particle effect.
                             * @param particleType The particle type
                             * @return This builder for chaining
                             */
                            // @ts-ignore
                            type(particleType: org.spongepowered.api.effect.particle.ParticleType): org.spongepowered.api.effect.particle.ParticleEffect.Builder
                            /**
                             * Sets the value of the specified {@link ParticleOption}.
                             * @param option The option
                             * @param value The value
                             * @return This builder for chaining
                             * @throws IllegalArgumentException If the specified value isn't valid
                             */
                            // @ts-ignore
                            option<V>(option: org.spongepowered.api.effect.particle.ParticleOption<V>, value: V): org.spongepowered.api.effect.particle.ParticleEffect.Builder
                            /**
                             * Sets the velocity of the particle effect.
                             * <p>The default velocity is {@link Vector3d#ZERO}.</p>
                             * @param velocity The velocity
                             * @return This builder for chaining
                             */
                            // @ts-ignore
                            velocity(velocity: Vector3d): org.spongepowered.api.effect.particle.ParticleEffect.Builder
                            /**
                             * Sets the offset of the particle effect.
                             * <p>The default offset is {@link Vector3d#ZERO}.</p>
                             * @param offset The offset
                             * @return This builder for chaining
                             */
                            // @ts-ignore
                            offset(offset: Vector3d): org.spongepowered.api.effect.particle.ParticleEffect.Builder
                            /**
                             * Sets the amount of particles of the particle effect.
                             * <p>The default quantity is 1.</p>
                             * @param quantity The quantity particles
                             * @return This builder, for chaining
                             * @throws IllegalArgumentException If the quantity is less than one
                             */
                            // @ts-ignore
                            quantity(quantity: number /*int*/): org.spongepowered.api.effect.particle.ParticleEffect.Builder
                            /**
                             * Builds an instance of a ParticleEffect.
                             * @return A new instance of a ParticleEffect
                             */
                            // @ts-ignore
                            build(): org.spongepowered.api.effect.particle.ParticleEffect
                        }
                    }
                }
            }
        }
    }
}
