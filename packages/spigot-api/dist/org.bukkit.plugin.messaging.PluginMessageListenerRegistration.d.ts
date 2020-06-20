declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                /**
                 * Contains information about a {@link Plugin}s registration to a plugin
                 * channel.
                 */
                // @ts-ignore
                class PluginMessageListenerRegistration extends java.lang.Object {
                    // @ts-ignore
                    constructor(messenger: org.bukkit.plugin.messaging.Messenger, plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener)
                    /**
                     * Gets the plugin channel that this registration is about.
                     * @return Plugin channel.
                     */
                    // @ts-ignore
                    getChannel(): java.lang.String
                    /**
                     * Gets the registered listener described by this registration.
                     * @return Registered listener.
                     */
                    // @ts-ignore
                    getListener(): org.bukkit.plugin.messaging.PluginMessageListener
                    /**
                     * Gets the plugin that this registration is for.
                     * @return Registered plugin.
                     */
                    // @ts-ignore
                    getPlugin(): org.bukkit.plugin.Plugin
                    /**
                     * Checks if this registration is still valid.
                     * @return True if this registration is still valid, otherwise false.
                     */
                    // @ts-ignore
                    isValid(): boolean
                    // @ts-ignore
                    equals(obj: any): boolean
                    // @ts-ignore
                    hashCode(): int
                }
            }
        }
    }
}
