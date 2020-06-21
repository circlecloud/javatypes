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
                    constructor(messenger: org.bukkit.plugin.messaging.Messenger, plugin: org.bukkit.plugin.Plugin, channel: java.lang.String | string, listener: org.bukkit.plugin.messaging.PluginMessageListener)
                    /**
                     * Gets the plugin channel that this registration is about.
                     * @return Plugin channel.
                     */
                    // @ts-ignore
                    public getChannel(): string
                    /**
                     * Gets the registered listener described by this registration.
                     * @return Registered listener.
                     */
                    // @ts-ignore
                    public getListener(): org.bukkit.plugin.messaging.PluginMessageListener
                    /**
                     * Gets the plugin that this registration is for.
                     * @return Registered plugin.
                     */
                    // @ts-ignore
                    public getPlugin(): org.bukkit.plugin.Plugin
                    /**
                     * Checks if this registration is still valid.
                     * @return True if this registration is still valid, otherwise false.
                     */
                    // @ts-ignore
                    public isValid(): boolean
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
