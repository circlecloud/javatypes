declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                /**
                 * A listener for a specific Plugin Channel, which will receive notifications
                 * of messages sent from a client.
                 */
                // @ts-ignore
                interface PluginMessageListener {
                    /**
                     * A method that will be thrown when a PluginMessageSource sends a plugin
                     * message on a registered channel.
                     * @param channel Channel that the message was sent through.
                     * @param player Source of the message.
                     * @param message The raw message that was sent.
                     */
                    // @ts-ignore
                    onPluginMessageReceived(channel: java.lang.String | string, player: org.bukkit.entity.Player, message: number /*byte*/[]): void
                }
            }
        }
    }
}
