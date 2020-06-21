declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                // @ts-ignore
                interface AlternateCatalogRegistryModule<T extends org.spongepowered.api.CatalogType> extends org.spongepowered.api.registry.CatalogRegistryModule<T> {
                    /**
                     * Gets the catalog {@link Map map} instead of defaulting to utilizing
                     * {@link RegisterCatalog} annotated field for the map of catalog types.
                     * @return The catalog map to use for the registry system
                     */
                    // @ts-ignore
                    provideCatalogMap(): java.util.Map<java.lang.String | string, T>
                }
            }
        }
    }
}
