declare namespace cn {
    namespace nukkit {
        namespace plugin {
            namespace service {
                /**
                 * Created on 16-11-20.
                 */
                // @ts-ignore
                interface ServiceManager {
                    /**
                     * Register an object as a service's provider.
                     * @param service  the service
                     * @param provider the service provider
                     * @param plugin   the plugin
                     * @param priority the priority
                     * @return {#code true}, or {@code false} only if {@code provider}
                     *  already registered
                     */
                    // @ts-ignore
                    register<T>(service: java.lang.Class<T>, provider: T, plugin: cn.nukkit.plugin.Plugin, priority: cn.nukkit.plugin.service.ServicePriority): boolean
                    /**
                     * Cancel service's provider(s) offered this plugin.
                     * @param plugin the plugin
                     * @return a {#link com.google.common.collect.ImmutableList}
                     *  contains cancelled {@link RegisteredServiceProvider}
                     */
                    // @ts-ignore
                    cancel(plugin: cn.nukkit.plugin.Plugin): Array<cn.nukkit.plugin.service.RegisteredServiceProvider<any>>
                    /**
                     * Cancel a service's provider.
                     * @param service  the service
                     * @param provider the provider
                     * @return the cancelled {#link RegisteredServiceProvider}, or {@code null} if not
                     *  any provider cancelled
                     */
                    // @ts-ignore
                    cancel<T>(service: java.lang.Class<T>, provider: T): cn.nukkit.plugin.service.RegisteredServiceProvider<T>
                    /**
                     * Return the service's provider.
                     * @param service the target service
                     * @return a {#link RegisteredServiceProvider} registered highest priority, or
                     *  {@code null} if not exists
                     */
                    // @ts-ignore
                    getProvider<T>(service: java.lang.Class<T>): cn.nukkit.plugin.service.RegisteredServiceProvider<T>
                    /**
                     * Return the known service(s).
                     * @return a {#link com.google.common.collect.ImmutableList} contains the
                     *  known service(s)
                     */
                    // @ts-ignore
                    getKnownService(): Array<java.lang.Class<any>>
                    // @ts-ignore
                    getRegistrations(plugin: cn.nukkit.plugin.Plugin): Array<cn.nukkit.plugin.service.RegisteredServiceProvider<any>>
                    // @ts-ignore
                    getRegistrations<T>(service: java.lang.Class<T>): Array<cn.nukkit.plugin.service.RegisteredServiceProvider<T>>
                    // @ts-ignore
                    isProvidedFor<T>(service: java.lang.Class<T>): boolean
                }
            }
        }
    }
}
