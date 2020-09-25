declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                /**
                 * Represents the different directions a plugin channel may go.
                 */
                // @ts-ignore
                class PluginChannelDirection extends java.lang.Enum<org.bukkit.plugin.messaging.PluginChannelDirection> {
                    /**
                     * The plugin channel is being sent to the server from a client.
                     */
                    // @ts-ignore
                    public static readonly INCOMING: org.bukkit.plugin.messaging.PluginChannelDirection
                    /**
                     * The plugin channel is being sent to a client from the server.
                     */
                    // @ts-ignore
                    public static readonly OUTGOING: org.bukkit.plugin.messaging.PluginChannelDirection
                    // @ts-ignore
                    public static values(): org.bukkit.plugin.messaging.PluginChannelDirection[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.plugin.messaging.PluginChannelDirection
                }
            }
        }
    }
}
