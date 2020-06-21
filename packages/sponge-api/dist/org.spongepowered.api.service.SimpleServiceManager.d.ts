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
                    public setProvider<T>(plugin: java.lang.Object | any, service: java.lang.Class<T>, provider: T): void
                    // @ts-ignore
                    public provide<T>(service: java.lang.Class<T>): java.util.Optional<T>
                    // @ts-ignore
                    public getRegistration<T>(service: java.lang.Class<T>): java.util.Optional<org.spongepowered.api.service.ProviderRegistration<T>>
                    // @ts-ignore
                    public provideUnchecked<T>(service: java.lang.Class<T>): T
                }
            }
        }
    }
}
