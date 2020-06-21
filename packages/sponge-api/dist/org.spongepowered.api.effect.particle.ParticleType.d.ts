declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace particle {
                    /**
                     * Represents a particle that can be sent on a Minecraft client.
                     */
                    // @ts-ignore
                    interface ParticleType extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the default value for the specified {@link ParticleOption}, it may
                         * return {@link Optional#empty()} if the particle option isn't supported
                         * by this particle type.
                         * @param option The particle option
                         * @param <V> The value type
                         * @return The option value if present, otherwise {#link Optional#empty()}
                         */
                        // @ts-ignore
                        getDefaultOption<V>(option: org.spongepowered.api.effect.particle.ParticleOption<V>): java.util.Optional<V>
                        /**
                         * Gets a immutable {@link Map} with all the available
                         * {@link ParticleOption}s and their values. When a option isn't
                         * available inside this {@link Map} it's most likely not supported
                         * by this particle type.
                         * @return The default options
                         */
                        // @ts-ignore
                        getDefaultOptions(): java.util.Map<org.spongepowered.api.effect.particle.ParticleOption<any>, java.lang.Object | any>
                    }
                }
            }
        }
    }
}
