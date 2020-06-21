declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * An event relating to a registered service. This is called in a {@link
                 * org.bukkit.plugin.ServicesManager}
                 */
                // @ts-ignore
                abstract class ServiceEvent extends org.bukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(provider: org.bukkit.plugin.RegisteredServiceProvider<any>)
                    // @ts-ignore
                    public getProvider(): org.bukkit.plugin.RegisteredServiceProvider<any>
                }
            }
        }
    }
}
