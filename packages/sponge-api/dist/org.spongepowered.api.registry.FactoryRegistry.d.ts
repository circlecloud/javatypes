declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                interface FactoryRegistry<T, TFactoryOwner> extends org.spongepowered.api.registry.RegistryModule {
                    /**
                     * Gets the owning {@link Class} of the factory in question.
                     * @return The class owning the factory in question
                     */
                    // @ts-ignore
                    getFactoryOwner(): java.lang.Class<TFactoryOwner>
                    /**
                     * Provides the new factory instance.
                     * @return The factory instance
                     */
                    // @ts-ignore
                    provideFactory(): T
                    /**
                     * Initialize this registry module to perform any required operations
                     * prior to initializing the factory, and or constructing the factory.
                     */
                    // @ts-ignore
                    initialize(): void
                }
            }
        }
    }
}
