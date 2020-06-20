declare namespace org {
    namespace bukkit {
        namespace plugin {
            namespace messaging {
                /**
                 * A class responsible for managing the registrations of plugin channels and
                 * their listeners.
                 * Channel names must contain a colon separator and consist of only [a-z0-9/._-]
                 * - i.e. they MUST be valid {@link NamespacedKey}. The "BungeeCord" channel is
                 * an exception and may only take this form.
                 */
                // @ts-ignore
                interface Messenger {
                    /**
                     * Represents the largest size that an individual Plugin Message may be.
                     */
                    // @ts-ignore
                    
                    /**
                     * Represents the largest size that a Plugin Channel may be.
                     */
                    // @ts-ignore
                    
                    /**
                     * Checks if the specified channel is a reserved name.
                     * <br>
                     * All channels within the "minecraft" namespace except for
                     * "minecraft:brand" are reserved.
                     * @param channel Channel name to check.
                     * @return True if the channel is reserved, otherwise false.
                     * @throws IllegalArgumentException Thrown if channel is null.
                     */
                    // @ts-ignore
                    isReservedChannel(channel: string): boolean
                    /**
                     * Registers the specific plugin to the requested outgoing plugin channel,
                     * allowing it to send messages through that channel to any clients.
                     * @param plugin Plugin that wishes to send messages through the channel.
                     * @param channel Channel to register.
                     * @throws IllegalArgumentException Thrown if plugin or channel is null.
                     */
                    // @ts-ignore
                    registerOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void
                    /**
                     * Unregisters the specific plugin from the requested outgoing plugin
                     * channel, no longer allowing it to send messages through that channel to
                     * any clients.
                     * @param plugin Plugin that no longer wishes to send messages through the
                     *      channel.
                     * @param channel Channel to unregister.
                     * @throws IllegalArgumentException Thrown if plugin or channel is null.
                     */
                    // @ts-ignore
                    unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void
                    /**
                     * Unregisters the specific plugin from all outgoing plugin channels, no
                     * longer allowing it to send any plugin messages.
                     * @param plugin Plugin that no longer wishes to send plugin messages.
                     * @throws IllegalArgumentException Thrown if plugin is null.
                     */
                    // @ts-ignore
                    unregisterOutgoingPluginChannel(plugin: org.bukkit.plugin.Plugin): void
                    /**
                     * Registers the specific plugin for listening on the requested incoming
                     * plugin channel, allowing it to act upon any plugin messages.
                     * @param plugin Plugin that wishes to register to this channel.
                     * @param channel Channel to register.
                     * @param listener Listener to receive messages on.
                     * @return The resulting registration that was made as a result of this
                     *      method.
                     * @throws IllegalArgumentException Thrown if plugin, channel or listener
                     *      is null, or the listener is already registered for this channel.
                     */
                    // @ts-ignore
                    registerIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): org.bukkit.plugin.messaging.PluginMessageListenerRegistration
                    /**
                     * Unregisters the specific plugin's listener from listening on the
                     * requested incoming plugin channel, no longer allowing it to act upon
                     * any plugin messages.
                     * @param plugin Plugin that wishes to unregister from this channel.
                     * @param channel Channel to unregister.
                     * @param listener Listener to stop receiving messages on.
                     * @throws IllegalArgumentException Thrown if plugin, channel or listener
                     *      is null.
                     */
                    // @ts-ignore
                    unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string, listener: org.bukkit.plugin.messaging.PluginMessageListener): void
                    /**
                     * Unregisters the specific plugin from listening on the requested
                     * incoming plugin channel, no longer allowing it to act upon any plugin
                     * messages.
                     * @param plugin Plugin that wishes to unregister from this channel.
                     * @param channel Channel to unregister.
                     * @throws IllegalArgumentException Thrown if plugin or channel is null.
                     */
                    // @ts-ignore
                    unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin, channel: string): void
                    /**
                     * Unregisters the specific plugin from listening on all plugin channels
                     * through all listeners.
                     * @param plugin Plugin that wishes to unregister from this channel.
                     * @throws IllegalArgumentException Thrown if plugin is null.
                     */
                    // @ts-ignore
                    unregisterIncomingPluginChannel(plugin: org.bukkit.plugin.Plugin): void
                    /**
                     * Gets a set containing all the outgoing plugin channels.
                     * @return List of all registered outgoing plugin channels.
                     */
                    // @ts-ignore
                    getOutgoingChannels(): java.util.Set<java.lang.String>
                    /**
                     * Gets a set containing all the outgoing plugin channels that the
                     * specified plugin is registered to.
                     * @param plugin Plugin to retrieve channels for.
                     * @return List of all registered outgoing plugin channels that a plugin
                     *      is registered to.
                     * @throws IllegalArgumentException Thrown if plugin is null.
                     */
                    // @ts-ignore
                    getOutgoingChannels(plugin: org.bukkit.plugin.Plugin): java.util.Set<java.lang.String>
                    /**
                     * Gets a set containing all the incoming plugin channels.
                     * @return List of all registered incoming plugin channels.
                     */
                    // @ts-ignore
                    getIncomingChannels(): java.util.Set<java.lang.String>
                    /**
                     * Gets a set containing all the incoming plugin channels that the
                     * specified plugin is registered for.
                     * @param plugin Plugin to retrieve channels for.
                     * @return List of all registered incoming plugin channels that the plugin
                     *      is registered for.
                     * @throws IllegalArgumentException Thrown if plugin is null.
                     */
                    // @ts-ignore
                    getIncomingChannels(plugin: org.bukkit.plugin.Plugin): java.util.Set<java.lang.String>
                    /**
                     * Gets a set containing all the incoming plugin channel registrations
                     * that the specified plugin has.
                     * @param plugin Plugin to retrieve registrations for.
                     * @return List of all registrations that the plugin has.
                     * @throws IllegalArgumentException Thrown if plugin is null.
                     */
                    // @ts-ignore
                    getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin): java.util.Set<org.bukkit.plugin.messaging.PluginMessageListenerRegistration>
                    /**
                     * Gets a set containing all the incoming plugin channel registrations
                     * that are on the requested channel.
                     * @param channel Channel to retrieve registrations for.
                     * @return List of all registrations that are on the channel.
                     * @throws IllegalArgumentException Thrown if channel is null.
                     */
                    // @ts-ignore
                    getIncomingChannelRegistrations(channel: string): java.util.Set<org.bukkit.plugin.messaging.PluginMessageListenerRegistration>
                    /**
                     * Gets a set containing all the incoming plugin channel registrations
                     * that the specified plugin has on the requested channel.
                     * @param plugin Plugin to retrieve registrations for.
                     * @param channel Channel to filter registrations by.
                     * @return List of all registrations that the plugin has.
                     * @throws IllegalArgumentException Thrown if plugin or channel is null.
                     */
                    // @ts-ignore
                    getIncomingChannelRegistrations(plugin: org.bukkit.plugin.Plugin, channel: string): java.util.Set<org.bukkit.plugin.messaging.PluginMessageListenerRegistration>
                    /**
                     * Checks if the specified plugin message listener registration is valid.
                     * <p>
                     * A registration is considered valid if it has not be unregistered and
                     * that the plugin is still enabled.
                     * @param registration Registration to check.
                     * @return True if the registration is valid, otherwise false.
                     */
                    // @ts-ignore
                    isRegistrationValid(registration: org.bukkit.plugin.messaging.PluginMessageListenerRegistration): boolean
                    /**
                     * Checks if the specified plugin has registered to receive incoming
                     * messages through the requested channel.
                     * @param plugin Plugin to check registration for.
                     * @param channel Channel to test for.
                     * @return True if the channel is registered, else false.
                     */
                    // @ts-ignore
                    isIncomingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean
                    /**
                     * Checks if the specified plugin has registered to send outgoing messages
                     * through the requested channel.
                     * @param plugin Plugin to check registration for.
                     * @param channel Channel to test for.
                     * @return True if the channel is registered, else false.
                     */
                    // @ts-ignore
                    isOutgoingChannelRegistered(plugin: org.bukkit.plugin.Plugin, channel: string): boolean
                    /**
                     * Dispatches the specified incoming message to any registered listeners.
                     * @param source Source of the message.
                     * @param channel Channel that the message was sent by.
                     * @param message Raw payload of the message.
                     */
                    // @ts-ignore
                    dispatchIncomingMessage(source: org.bukkit.entity.Player, channel: string, message: number /*byte*/[]): void
                }
            }
        }
    }
}
