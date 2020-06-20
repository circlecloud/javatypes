declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace particle {
                    /**
                     * Represents a option that may be used on a {@link ParticleEffect}. It
                     * will define how a particle will behave and it's appearance.
                     * @param <V> The type of the option value
                     */
                    // @ts-ignore
                    interface ParticleOption<V> extends org.spongepowered.api.CatalogType {
                        /**
                         * Gets the type of the value.
                         * @return The value type
                         */
                        // @ts-ignore
                        getValueType(): java.lang.Class<V>
                    }
                }
            }
        }
    }
}
