declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                /**
                 * A {@link CatalogRegistryModule} that allows additional registration
                 * after the initial registration of the default {@link CatalogType}s.
                 * The event {@link org.spongepowered.api.event.game.GameRegistryEvent.Register} will
                 * be called for every {@link AdditionalCatalogRegistryModule} that is
                 * registered for a specific {@link CatalogType}.
                 * @param <T> The catalog type
                 */
                // @ts-ignore
                interface AdditionalCatalogRegistryModule<T extends org.spongepowered.api.CatalogType> extends org.spongepowered.api.registry.CatalogRegistryModule<T> {
                    /**
                     * Performs additional registration after initial registration of
                     * the pertaining {@link CatalogType}.
                     * @param extraCatalog The extra catalog to register
                     */
                    // @ts-ignore
                    registerAdditionalCatalog(extraCatalog: T extends org.spongepowered.api.CatalogType): void
                }
            }
        }
    }
}
