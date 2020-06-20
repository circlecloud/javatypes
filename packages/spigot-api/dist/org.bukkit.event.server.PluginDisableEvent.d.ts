declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * Called when a plugin is disabled.
                 */
                // @ts-ignore
                class PluginDisableEvent extends org.bukkit.event.server.PluginEvent {
                    // @ts-ignore
                    constructor(plugin: org.bukkit.plugin.Plugin)
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
