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
                    public isReservedChannel(channel: java.lang.String | string): boolean
                    // @ts-ignore
                    public registerOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: java.lang.String | string): void
                    // @ts-ignore
                    public unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: java.lang.String | string): void
                    // @ts-ignore
                    public unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin): void
                    // @ts-ignore
                    public registerIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: java.lang.String | string, listener: org.bukkit.plugin.messaging.PluginMessageListener): org.bukkit.plugin.messaging.PluginMessageListenerRegistration
                    // @ts-ignore
                    public unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: java.lang.String | string, listener: org.bukkit.plugin.messaging.PluginMessageListener): void
                    // @ts-ignore
                    public unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: java.lang.String | string): void
                    // @ts-ignore
                    public unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin): void
                    // @ts-ignore
                    public getOutgoingChannels(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getOutgoingChannels(plugin: org.bukkit.plugin.Plugin): Array<java.lang.String | string>
                    // @ts-ignore
                    public getIncomingChannels(): Array<java.lang.String | string>
                    // @ts-ignore
                    public getIncomingChannels(plugin: org.bukkit.plugin.Plugin): Array<java.lang.String | string>
                    // @ts-ignore
                    public getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin): Array<org.bukkit.plugin.messaging.PluginMessageListenerRegistration>
                    // @ts-ignore
                    public getIncomingChannelRegistrations(channel: java.lang.String | string): Array<org.bukkit.plugin.messaging.PluginMessageListenerRegistration>
                    // @ts-ignore
                    public getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin, channel: java.lang.String | string): Array<org.bukkit.plugin.messaging.PluginMessageListenerRegistration>
                    // @ts-ignore
                    public isRegistrationValid(registration: org.bukkit.plugin.messaging.PluginMessageListenerRegistration): boolean
                    // @ts-ignore
                    public isIncomingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: java.lang.String | string): boolean
                    // @ts-ignore
                    public isOutgoingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: java.lang.String | string): boolean
                    // @ts-ignore
                    public dispatchIncomingMessage(source: org.bukkit.entity.Player, channel: java.lang.String | string, message: number /*byte*/[]): void
                    /**
                     * Validates a Plugin Channel name.
                     * @param channel Channel name to validate.
                     * @deprecated not an API method
                     */
                    // @ts-ignore
                    public static validateChannel(channel: java.lang.String | string): void
                    /**
                     * Validates and corrects a Plugin Channel name. Method is not reentrant / idempotent.
                     * @param channel Channel name to validate.
                     * @return corrected channel name
                     * @deprecated not an API method
                     */
                    // @ts-ignore
                    public static validateAndCorrectChannel(channel: java.lang.String | string): string
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
                    public static validatePluginMessage(messenger: org.bukkit.plugin.messaging.Messenger, source: org.bukkit.plugin.Plugin, channel: java.lang.String | string, message: number /*byte*/[]): void
                }
            }
        }
    }
}
