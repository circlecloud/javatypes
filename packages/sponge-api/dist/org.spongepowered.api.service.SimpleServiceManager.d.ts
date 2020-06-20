declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace service {
                /**
                 * The default implementation of {@link ServiceManager}.
                 */
                // @ts-ignore
                class SimpleServiceManager extends java.lang.Object implements org.spongepowered.api.service.ServiceManager {
                    /**
                     * Construct a simple {@link ServiceManager}.
                     * @param pluginManager The plugin manager to get the
                     *             {#link PluginContainer} for a given plugin
                     */
                    // @ts-ignore
                    constructor(pluginManager: org.spongepowered.api.plugin.PluginManager)
                    // @ts-ignore
                    setProvider<T>(plugin: any, service: java.lang.Class<T>, provider: T): void
                    // @ts-ignore
                    provide<T>(service: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    getRegistration<T>(service: java.lang.Class<T>): java.util.Optional<org.spongepowered.api.service.ProviderRegistration<T>>
                    // @ts-ignore
                    provideUnchecked<T>(service: java.lang.Class<T>): T
                }
            }
        }
    }
}
