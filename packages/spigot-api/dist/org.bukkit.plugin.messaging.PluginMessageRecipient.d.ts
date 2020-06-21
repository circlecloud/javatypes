declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                /**
                 * Represents a possible recipient for a Plugin Message.
                 */
                // @ts-ignore
                interface PluginMessageRecipient {
                    /**
                     * Sends this recipient a Plugin Message on the specified outgoing
                     * channel.
                     * <p>
                     * The message may not be larger than {@link Messenger#MAX_MESSAGE_SIZE}
                     * bytes, and the plugin must be registered to send messages on the
                     * specified channel.
                     * @param source The plugin that sent this message.
                     * @param channel The channel to send this message on.
                     * @param message The raw message to send.
                     * @throws IllegalArgumentException Thrown if the source plugin is
                     *      disabled.
                     * @throws IllegalArgumentException Thrown if source, channel or message
                     *      is null.
                     * @throws MessageTooLargeException Thrown if the message is too big.
                     * @throws ChannelNotRegisteredException Thrown if the channel is not
                     *      registered for this plugin.
                     */
                    // @ts-ignore
                    sendPluginMessage(source: org.bukkit.plugin.Plugin, channel: java.lang.String | string, message: number /*byte*/[]): void
                    /**
                     * Gets a set containing all the Plugin Channels that this client is
                     * listening on.
                     * @return Set containing all the channels that this client may accept.
                     */
                    // @ts-ignore
                    getListeningPluginChannels(): Array<java.lang.String | string>
                }
            }
        }
    }
}
