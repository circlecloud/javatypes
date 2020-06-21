declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace particle {
                    /**
                     * Represents a particle effect that can be send to the Minecraft client.
                     */
                    // @ts-ignore
                    interface ParticleEffect extends org.spongepowered.api.data.DataSerializable {
                        /**
                         * Creates a new {@link Builder} to build a {@link ParticleEffect}.
                         * @return The new builder
                         */
                        // @ts-ignore
                        builder(): org.spongepowered.api.effect.particle.ParticleEffect.Builder
                        /**
                         * Gets the type of the particle effect.
                         * @return The particle type
                         */
                        // @ts-ignore
                        getType(): org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * Gets the value for the specified {@link ParticleOption}.
                         * @param option The particle option
                         * @param <V> The value type
                         * @return The option value if present, otherwise {#link Optional#empty()}
                         */
                        // @ts-ignore
                        getOption<V>(option: org.spongepowered.api.effect.particle.ParticleOption<V>): java.util.Optional<V>
                        /**
                         * Gets the value for the specified {@link ParticleOption} or
                         * the default value if not present.
                         * @param option The particle option
                         * @param <V> The value type
                         * @return The option value if present, otherwise {#link Optional#empty()}
                         */
                        // @ts-ignore
                        getOptionOrDefault<V>(option: org.spongepowered.api.effect.particle.ParticleOption<V>): java.util.Optional<V>
                        /**
                         * Gets a immutable {@link Map} with all the available
                         * {@link ParticleOption}s and their values.
                         * @return The default options
                         */
                        // @ts-ignore
                        getOptions(): java.util.Map<org.spongepowered.api.effect.particle.ParticleOption<any>, java.lang.Object | any>
                    }
                }
            }
        }
    }
}
