declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                interface CatalogRegistryModule<T extends org.spongepowered.api.CatalogType> extends org.spongepowered.api.registry.RegistryModule {
                    /**
                     * Gets the desired {@link CatalogType} from the provided {@link String} id.
                     * If a {@link CatalogType catalog type} is not registered for the given {@code id},
                     * {@link Optional#empty()} is returned.
                     * @param id The id of the catalog type requested
                     * @return The catalog type, if available
                     */
                    // @ts-ignore
                    getById(id: java.lang.String | string): java.util.Optional<T>
                    /**
                     * Gets all registered {@link CatalogType}s registered in this
                     * {@link RegistryModule}.
                     * @return All catalog types registered in this module
                     */
                    // @ts-ignore
                    getAll(): Array<T>
                }
            }
        }
    }
}
