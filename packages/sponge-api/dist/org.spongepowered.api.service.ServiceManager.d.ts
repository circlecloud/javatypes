declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                /**
                 * A manager of services and their providers.
                 * <p>A <em>service</em> is a standard interface or class. A <em>provider</em>
                 * is an implementation of that service. A manager tracks registered providers
                 * with the service(s) that the provider implements.</p>
                 * <p>Providers are registered at runtime using
                 * {@link #setProvider(Object, Class, Object)}. Only one provider
                 * can be registered for each service, but a provider can be marked as
                 * replaceable if it can be replaced with a new provider.</p>
                 */
                // @ts-ignore
                interface ServiceManager {
                    /**
                     * Register a provider with the service manager.
                     * <p>Services are by definition replaceable at any given time.</p>
                     * <p>Services should only be registered during initialization. If services
                     * are registered later, then they may not be utilized.</p>
                     * @param plugin The instance of a plugin
                     * @param service The service
                     * @param provider The implementation
                     * @param <T> The type of service
                     * @throws IllegalArgumentException Thrown if {#code plugin} is not a
                     *      plugin instance
                     */
                    // @ts-ignore
                    setProvider<T>(plugin: any, service: java.lang.Class<T>, provider: T): void
                    /**
                     * Return a provider for the given service, if one is available.
                     * <p>The returned provider may be a proxy to the real underlying proxy,
                     * depending on the implementation of the service manager.</p>
                     * @param service The service
                     * @param <T> The type of service
                     * @return A provider, if available
                     */
                    // @ts-ignore
                    provide<T>(service: java.lang.Class<T>): java.util.Optional<T>
                    /**
                     * Gets the {@link ProviderRegistration} for the given service, if available.
                     * @param service The service
                     * @param <T> The type of service
                     * @return The {#link ProviderRegistration}, if available.
                     */
                    // @ts-ignore
                    getRegistration<T>(service: java.lang.Class<T>): java.util.Optional<org.spongepowered.api.service.ProviderRegistration<T>>
                    /**
                     * Gets whether the class of the type of service is already registered with
                     * this manager. This does not register or unregister any services.
                     * @param service The service class
                     * @return True if there is a provider for the desired service
                     */
                    // @ts-ignore
                    isRegistered(service: java.lang.Class<any>): boolean
                    /**
                     * Return a provider for the given service, raising an unchecked exception
                     * if a provider does not exist.
                     * <p>The returned provider may be a proxy to the real underlying proxy,
                     * depending on the implementation of the service manager.</p>
                     * @param service The service
                     * @param <T> The type of service
                     * @return A provider
                     * @throws ProvisioningException Thrown if a provider cannot be provisioned
                     */
                    // @ts-ignore
                    provideUnchecked<T>(service: java.lang.Class<T>): T
                }
            }
        }
    }
}
