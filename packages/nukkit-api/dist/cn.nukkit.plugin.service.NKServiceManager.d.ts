declare namespace cn {
    namespace nukkit {
        namespace plugin {
            namespace service {
                /**
                 * Created on 16-11-20.
                 */
                // @ts-ignore
                class NKServiceManager extends java.lang.Object implements cn.nukkit.plugin.service.ServiceManager {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public register<T>(service: java.lang.Class<T>, provider: T, plugin: cn.nukkit.plugin.Plugin, priority: cn.nukkit.plugin.service.ServicePriority): boolean
                    // @ts-ignore
                    provide<T>(service: java.lang.Class<T>, instance: T, plugin: cn.nukkit.plugin.Plugin, priority: cn.nukkit.plugin.service.ServicePriority): boolean
                    // @ts-ignore
                    public cancel(plugin: cn.nukkit.plugin.Plugin): Array<cn.nukkit.plugin.service.RegisteredServiceProvider<any>>
                    // @ts-ignore
                    public cancel<T>(service: java.lang.Class<T>, provider: T): cn.nukkit.plugin.service.RegisteredServiceProvider<T>
                    // @ts-ignore
                    public getProvider<T>(service: java.lang.Class<T>): cn.nukkit.plugin.service.RegisteredServiceProvider<T>
                    // @ts-ignore
                    public getKnownService(): Array<java.lang.Class<any>>
                    // @ts-ignore
                    public getRegistrations(plugin: cn.nukkit.plugin.Plugin): Array<cn.nukkit.plugin.service.RegisteredServiceProvider<any>>
                    // @ts-ignore
                    public getRegistrations<T>(service: java.lang.Class<T>): Array<cn.nukkit.plugin.service.RegisteredServiceProvider<T>>
                    // @ts-ignore
                    public isProvidedFor<T>(service: java.lang.Class<T>): boolean
                }
            }
        }
    }
}
