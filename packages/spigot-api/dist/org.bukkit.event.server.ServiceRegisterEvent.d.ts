declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * This event is called when a service is registered.
                 * <p>
                 * Warning: The order in which register and unregister events are called
                 * should not be relied upon.
                 */
                // @ts-ignore
                class ServiceRegisterEvent extends org.bukkit.event.server.ServiceEvent {
                    // @ts-ignore
                    constructor(registeredProvider: org.bukkit.plugin.RegisteredServiceProvider<any>)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
