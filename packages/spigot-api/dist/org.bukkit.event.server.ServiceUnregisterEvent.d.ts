declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * This event is called when a service is unregistered.
                 * <p>
                 * Warning: The order in which register and unregister events are called
                 * should not be relied upon.
                 */
                // @ts-ignore
                class ServiceUnregisterEvent extends org.bukkit.event.server.ServiceEvent {
                    // @ts-ignore
                    constructor(serviceProvider: org.bukkit.plugin.RegisteredServiceProvider<any>)
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
