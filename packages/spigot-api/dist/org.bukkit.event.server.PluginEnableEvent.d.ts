declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * Called when a plugin is enabled.
                 */
                // @ts-ignore
                class PluginEnableEvent extends org.bukkit.event.server.PluginEvent {
                    // @ts-ignore
                    constructor(plugin: org.bukkit.plugin.Plugin)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
