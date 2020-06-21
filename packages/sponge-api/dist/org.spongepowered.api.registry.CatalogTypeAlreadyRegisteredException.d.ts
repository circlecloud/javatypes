declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                class CatalogTypeAlreadyRegisteredException extends org.spongepowered.api.registry.RegistryException {
                    /**
                     * Creates a new {@link CatalogTypeAlreadyRegisteredException} with the
                     * provided {@link CatalogType} {@link String} id.
                     * @param id The id of the catalog type already registered
                     */
                    // @ts-ignore
                    constructor(id: java.lang.String | string)
                    /**
                     * Gets the {@link CatalogType} id already registered.
                     * @return The catalog type id already registered
                     */
                    // @ts-ignore
                    getAlreadyRegisteredId(): string
                }
            }
        }
    }
}
