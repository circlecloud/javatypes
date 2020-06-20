declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * Manages services and service providers. Services are an interface
             * specifying a list of methods that a provider must implement. Providers are
             * implementations of these services. A provider can be queried from the
             * services manager in order to use a service (if one is available). If
             * multiple plugins register a service, then the service with the highest
             * priority takes precedence.
             */
            // @ts-ignore
            interface ServicesManager {
                /**
                 * Register a provider of a service.
                 * @param <T> Provider
                 * @param service service class
                 * @param provider provider to register
                 * @param plugin plugin with the provider
                 * @param priority priority of the provider
                 */
                // @ts-ignore
                register<T>(service: java.lang.Class<T>, provider: T, plugin: org.bukkit.plugin.Plugin, priority: org.bukkit.plugin.ServicePriority): void
                /**
                 * Unregister all the providers registered by a particular plugin.
                 * @param plugin The plugin
                 */
                // @ts-ignore
                unregisterAll(plugin: org.bukkit.plugin.Plugin): void
                /**
                 * Unregister a particular provider for a particular service.
                 * @param service The service interface
                 * @param provider The service provider implementation
                 */
                // @ts-ignore
                unregister(service: java.lang.Class<any>, provider: any): void
                /**
                 * Unregister a particular provider.
                 * @param provider The service provider implementation
                 */
                // @ts-ignore
                unregister(provider: any): void
                /**
                 * Queries for a provider. This may return if no provider has been
                 * registered for a service. The highest priority provider is returned.
                 * @param <T> The service interface
                 * @param service The service interface
                 * @return provider or null
                 */
                // @ts-ignore
                load<T>(service: java.lang.Class<T>): T
                /**
                 * Queries for a provider registration. This may return if no provider
                 * has been registered for a service.
                 * @param <T> The service interface
                 * @param service The service interface
                 * @return provider registration or null
                 */
                // @ts-ignore
                getRegistration<T>(service: java.lang.Class<T>): org.bukkit.plugin.RegisteredServiceProvider<T>
                /**
                 * Get registrations of providers for a plugin.
                 * @param plugin The plugin
                 * @return provider registrations
                 */
                // @ts-ignore
                getRegistrations(plugin: org.bukkit.plugin.Plugin): java.util.List<org.bukkit.plugin.RegisteredServiceProvider<?>>
                /**
                 * Get registrations of providers for a service. The returned list is
                 * unmodifiable.
                 * @param <T> The service interface
                 * @param service The service interface
                 * @return list of registrations
                 */
                // @ts-ignore
                getRegistrations<T>(service: java.lang.Class<T>): java.util.Collection<org.bukkit.plugin.RegisteredServiceProvider<T>>
                /**
                 * Get a list of known services. A service is known if it has registered
                 * providers for it.
                 * @return list of known services
                 */
                // @ts-ignore
                getKnownServices(): java.util.Collection<java.lang.Class<?>>
                /**
                 * Returns whether a provider has been registered for a service. Do not
                 * check this first only to call <code>load(service)</code> later, as that
                 * would be a non-thread safe situation.
                 * @param <T> service
                 * @param service service to check
                 * @return whether there has been a registered provider
                 */
                // @ts-ignore
                isProvidedFor<T>(service: java.lang.Class<T>): boolean
            }
        }
    }
}
