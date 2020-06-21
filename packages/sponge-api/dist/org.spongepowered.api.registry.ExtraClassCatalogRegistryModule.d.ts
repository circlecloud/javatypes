declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                /**
                 * An enhanced {@link AdditionalCatalogRegistryModule} that explicitly
                 * has registrations of it's {@link CatalogType} based on a per-{@link Class}
                 * registration basis.
                 * @param <T> The type of catalog type
                 * @param <TExtra> The class
                 */
                // @ts-ignore
                interface ExtraClassCatalogRegistryModule<T extends org.spongepowered.api.CatalogType, TExtra> extends org.spongepowered.api.registry.AdditionalCatalogRegistryModule<T> {
                    /**
                     * Gets whether the provided {@link Class} is already registered.
                     * @param mappedClass The mapped class to check for registration
                     * @return Whether the class has a registration already or not
                     */
                    // @ts-ignore
                    hasRegistrationFor(mappedClass: java.lang.Class<any>): boolean
                    /**
                     * Gets the {@link CatalogType} based on the provided {@link Class}.
                     * @param clazz The class to get the catalog type for
                     * @return The catalog type
                     */
                    // @ts-ignore
                    getForClass(clazz: java.lang.Class<any>): T
                }
            }
        }
    }
}
