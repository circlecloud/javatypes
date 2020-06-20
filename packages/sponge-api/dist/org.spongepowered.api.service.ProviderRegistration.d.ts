declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                /**
                 * Represents the registration information for the provider of a service.
                 */
                // @ts-ignore
                interface ProviderRegistration<T> {
                    /**
                     * Gets the service of this provider registration.
                     * @return The service
                     */
                    // @ts-ignore
                    getService(): java.lang.Class<T>
                    /**
                     * Gets the service provider of this provider registration.
                     * @return The provider
                     */
                    // @ts-ignore
                    getProvider(): T
                    /**
                     * Gets the {@link PluginContainer} that registered the provider of this
                     * provider registration.
                     * @return The plugin container for this registration
                     */
                    // @ts-ignore
                    getPlugin(): org.spongepowered.api.plugin.PluginContainer
                }
            }
        }
    }
}
