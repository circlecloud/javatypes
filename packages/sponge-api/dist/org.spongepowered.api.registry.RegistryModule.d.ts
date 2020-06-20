declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace registry {
                /**
                 * A module that handles registrations of {@link Object}s, usually
                 * {@link CatalogType}s. The use of this is to manage like-object
                 * registrations in a centralized manner, without requiring hard
                 * {@code ids} or content affecting behavior. All {@code module}s
                 * are to be loaded and registered with the {@link GameRegistry}.
                 * <p>Note that there are various aspects of how initialization of
                 * these modules can be affected, be it from {@link CatalogRegistryModule}s,
                 * {@link DelayedRegistration}, {@link AlternateCatalogRegistryModule}s,
                 * or {@link RegistrationDependency}.</p>
                 */
                // @ts-ignore
                interface RegistryModule {
                    /**
                     * Performs default registrations of objects for use with either
                     * companion objects, or the {@link GameRegistry}. This is only
                     * called once, either at the pre-initialization phase of the
                     * {@link GameRegistry}, or if annotated with
                     * {@link DelayedRegistration}, at a later {@link RegistrationPhase}.
                     */
                    // @ts-ignore
                    registerDefaults(): void
                }
            }
        }
    }
}
