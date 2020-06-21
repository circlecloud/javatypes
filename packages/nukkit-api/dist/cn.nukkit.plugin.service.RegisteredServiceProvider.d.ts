declare namespace cn {
    namespace nukkit {
        namespace plugin {
            namespace service {
                /**
                 * Created on 16-11-20.
                 */
                // @ts-ignore
                class RegisteredServiceProvider<T> extends java.lang.Object implements java.lang.Comparable<cn.nukkit.plugin.service.RegisteredServiceProvider<T>> {
                    /**
                     * Return the provided service.
                     * @return the provided service
                     */
                    // @ts-ignore
                    public getService(): java.lang.Class<T>
                    /**
                     * Return the plugin provide this service.
                     * @return the plugin provide this service, or {#code null}
                     *  only if this service provided by server
                     */
                    // @ts-ignore
                    public getPlugin(): cn.nukkit.plugin.Plugin
                    /**
                     * Return the service provider.
                     * @return the service provider
                     */
                    // @ts-ignore
                    public getProvider(): T
                    // @ts-ignore
                    public getPriority(): cn.nukkit.plugin.service.ServicePriority
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public compareTo(other: cn.nukkit.plugin.service.RegisteredServiceProvider<T>): number /*int*/
                }
            }
        }
    }
}
