declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                /**
                 * Standard implementation to {@link Messenger}
                 */
                // @ts-ignore
                class StandardMessenger extends java.lang.Object implements org.bukkit.plugin.messaging.Messenger {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    isReservedChannel(channel: string): boolean
                    // @ts-ignore
                    registerOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void
                    // @ts-ignore
                    unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void
                    // @ts-ignore
                    unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin): void
                    // @ts-ignore
                    registerIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): org.bukkit.plugin.messaging.PluginMessageListenerRegistration
                    // @ts-ignore
                    unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): void
                    // @ts-ignore
                    unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void
                    // @ts-ignore
                    unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin): void
                    // @ts-ignore
                    getOutgoingChannels(): java.util.Set<java.lang.String>
                    // @ts-ignore
                    getOutgoingChannels(plugin: org.bukkit.plugin.Plugin): java.util.Set<java.lang.String>
                    // @ts-ignore
                    getIncomingChannels(): java.util.Set<java.lang.String>
                    // @ts-ignore
                    getIncomingChannels(plugin: org.bukkit.plugin.Plugin): java.util.Set<java.lang.String>
                    // @ts-ignore
                    getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin): java.util.Set<org.bukkit.plugin.messaging.PluginMessageListenerRegistration>
                    // @ts-ignore
                    getIncomingChannelRegistrations(channel: string): java.util.Set<org.bukkit.plugin.messaging.PluginMessageListenerRegistration>
                    // @ts-ignore
                    getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin, channel: string): java.util.Set<org.bukkit.plugin.messaging.PluginMessageListenerRegistration>
                    // @ts-ignore
                    isRegistrationValid(registration: org.bukkit.plugin.messaging.PluginMessageListenerRegistration): boolean
                    // @ts-ignore
                    isIncomingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean
                    // @ts-ignore
                    isOutgoingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean
                    // @ts-ignore
                    dispatchIncomingMessage(source: org.bukkit.entity.Player, channel: string, message: number /*byte*/[]): void
                    /**
                     * Validates a Plugin Channel name.
                     * @param channel Channel name to validate.
                     * @deprecated not an API method
                     */
                    // @ts-ignore
                    validateChannel(channel: string): void
                    /**
                     * Validates and corrects a Plugin Channel name. Method is not reentrant / idempotent.
                     * @param channel Channel name to validate.
                     * @return corrected channel name
                     * @deprecated not an API method
                     */
                    // @ts-ignore
                    validateAndCorrectChannel(channel: string): java.lang.String
                    /**
                     * Validates the input of a Plugin Message, ensuring the arguments are all
                     * valid.
                     * @param messenger Messenger to use for validation.
                     * @param source Source plugin of the Message.
                     * @param channel Plugin Channel to send the message by.
                     * @param message Raw message payload to send.
                     * @throws IllegalArgumentException Thrown if the source plugin is
                     *      disabled.
                     * @throws IllegalArgumentException Thrown if source, channel or message
                     *      is null.
                     * @throws MessageTooLargeException Thrown if the message is too big.
                     * @throws ChannelNameTooLongException Thrown if the channel name is too
                     *      long.
                     * @throws ChannelNotRegisteredException Thrown if the channel is not
                     *      registered for this plugin.
                     */
                    // @ts-ignore
                    validatePluginMessage(messenger: org.bukkit.plugin.messaging.Messenger, source: org.bukkit.plugin.Plugin, channel: string, message: number /*byte*/[]): void
                }
            }
        }
    }
}
