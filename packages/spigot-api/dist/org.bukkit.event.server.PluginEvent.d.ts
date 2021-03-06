declare namespace org {
    namespace bukkit {
        namespace event {
            namespace server {
                /**
                 * Used for plugin enable and disable events
                 */
                // @ts-ignore
                abstract class PluginEvent extends org.bukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(plugin: org.bukkit.plugin.Plugin)
                    /**
                     * Gets the plugin involved in this event
                     * @return Plugin for this event
                     */
                    // @ts-ignore
                    public getPlugin(): org.bukkit.plugin.Plugin
                }
            }
        }
    }
}
