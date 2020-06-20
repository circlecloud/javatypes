declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                namespace util {
                    /**
                     * Indicates that an API {@link CatalogType} has its registry module provided
                     * by a plugin, instead of the implementation.
                     * <p>This is used for {@link CatalogType}s such as {@link Currency}, where
                     * no default implementation of a particular part of the API exists (in this
                     * case, Economy).</p>
                     */
                    // @ts-ignore
                    class PluginProvidedRegistryModule implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
