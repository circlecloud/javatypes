declare namespace org {
    namespace bukkit {
        namespace plugin {
            /**
             * A simple services manager.
             */
            // @ts-ignore
            class SimpleServicesManager extends java.lang.Object implements org.bukkit.plugin.ServicesManager {
                // @ts-ignore
                constructor()
                /**
                 * Register a provider of a service.
                 * @param <T> Provider
                 * @param service service class
                 * @param provider provider to register
                 * @param plugin plugin with the provider
                 * @param priority priority of the provider
                 */
                // @ts-ignore
                public register<T>(service: java.lang.Class<T>, provider: T, plugin: org.bukkit.plugin.Plugin, priority: org.bukkit.plugin.ServicePriority): void
                /**
                 * Unregister all the providers registered by a particular plugin.
                 * @param plugin The plugin
                 */
                // @ts-ignore
                public unregisterAll(plugin: org.bukkit.plugin.Plugin): void
                /**
                 * Unregister a particular provider for a particular service.
                 * @param service The service interface
                 * @param provider The service provider implementation
                 */
                // @ts-ignore
                public unregister(service: java.lang.Class<any>, provider: java.lang.Object | any): void
                /**
                 * Unregister a particular provider.
                 * @param provider The service provider implementation
                 */
                // @ts-ignore
                public unregister(provider: java.lang.Object | any): void
                /**
                 * Queries for a provider. This may return if no provider has been
                 * registered for a service. The highest priority provider is returned.
                 * @param <T> The service interface
                 * @param service The service interface
                 * @return provider or null
                 */
                // @ts-ignore
                public load<T>(service: java.lang.Class<T>): T
                /**
                 * Queries for a provider registration. This may return if no provider
                 * has been registered for a service.
                 * @param <T> The service interface
                 * @param service The service interface
                 * @return provider registration or null
                 */
                // @ts-ignore
                public getRegistration<T>(service: java.lang.Class<T>): org.bukkit.plugin.RegisteredServiceProvider<T>
                /**
                 * Get registrations of providers for a plugin.
                 * @param plugin The plugin
                 * @return provider registrations
                 */
                // @ts-ignore
                public getRegistrations(plugin: org.bukkit.plugin.Plugin): Array<org.bukkit.plugin.RegisteredServiceProvider<any>>
                /**
                 * Get registrations of providers for a service. The returned list is
                 * an unmodifiable copy.
                 * @param <T> The service interface
                 * @param service The service interface
                 * @return a copy of the list of registrations
                 */
                // @ts-ignore
                public getRegistrations<T>(service: java.lang.Class<T>): Array<org.bukkit.plugin.RegisteredServiceProvider<T>>
                /**
                 * Get a list of known services. A service is known if it has registered
                 * providers for it.
                 * @return a copy of the set of known services
                 */
                // @ts-ignore
                public getKnownServices(): Array<java.lang.Class<any>>
                /**
                 * Returns whether a provider has been registered for a service.
                 * @param <T> service
                 * @param service service to check
                 * @return true if and only if there are registered providers
                 */
                // @ts-ignore
                public isProvidedFor<T>(service: java.lang.Class<T>): boolean
            }
        }
    }
}
