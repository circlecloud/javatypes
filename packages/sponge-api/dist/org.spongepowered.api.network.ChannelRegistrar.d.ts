declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                /**
                 * A registrar handling custom payloads via {@link ChannelBinding}s to and from
                 * {@link PlayerConnection}s and the server.
                 */
                // @ts-ignore
                interface ChannelRegistrar {
                    /**
                     * Creates a new channel binding for the given channel name. The channel can
                     * be used to send and receive messages.
                     * @param plugin The plugin registering the channel
                     * @param channel The channel to register
                     * @return A new {#link ChannelBinding} instance bound to the channel name
                     * @throws ChannelRegistrationException The channel name is too long
                     * @throws ChannelRegistrationException The channel name is reserved
                     */
                    // @ts-ignore
                    createChannel(plugin: java.lang.Object | any, channel: java.lang.String | string): org.spongepowered.api.network.ChannelBinding.IndexedMessageChannel
                    /**
                     * Creates a new raw channel binding. The channel can be used to send and
                     * Receive data from {@link ChannelBuf} objects.
                     * @param plugin The plugin registering the channel
                     * @param channel The channel to register
                     * @return A new {#link ChannelBinding} instance bound to the channel name
                     * @throws ChannelRegistrationException The channel name is too long
                     * @throws ChannelRegistrationException The channel name is reserved
                     * @see #createChannel
                     */
                    // @ts-ignore
                    createRawChannel(plugin: java.lang.Object | any, channel: java.lang.String | string): org.spongepowered.api.network.ChannelBinding.RawDataChannel
                    /**
                     * Gets a channel binding if a channel registered by that name exists.
                     * @param channel The name of the channel
                     * @return The channel if it exists
                     */
                    // @ts-ignore
                    getChannel(channel: java.lang.String | string): java.util.Optional<org.spongepowered.api.network.ChannelBinding>
                    /**
                     * Gets or creates a {@link ChannelBinding.IndexedMessageChannel} by the
                     * given name. If the channel exists and is a indexed message channel, then
                     * it is returned. If the channel is not an indexed message channel, then
                     * {@link IllegalStateException} is thrown. Otherwise, a new channel is
                     * created.
                     * @param plugin The plugin to register the channel if it doesn't exist
                     * @param channel The channel name
                     * @return A new or existing indexed message channel binding
                     * @throws IllegalStateException if the existing channel is not an
                     *          IndexedMessageChannel
                     * @throws ChannelRegistrationException for same reasons as
                     *          {#link #createChannel}.
                     */
                    // @ts-ignore
                    getOrCreate(plugin: java.lang.Object | any, channel: java.lang.String | string): org.spongepowered.api.network.ChannelBinding.IndexedMessageChannel
                    /**
                     * Gets or creates a {@link ChannelBinding.RawDataChannel} by the given
                     * name. If the channel exists and is a raw data channel, then it is
                     * returned. If the channel is not a raw data channel, then
                     * {@link IllegalStateException} is thrown. Otherwise, a new channel is
                     * created.
                     * @param plugin The plugin to register the channel if it doesn't exist
                     * @param channel The channel name
                     * @return A new or existing raw data channel binding
                     * @throws IllegalStateException if the existing channel is not an
                     *          RawDataChannel
                     * @throws ChannelRegistrationException for same reasons as
                     *          {#link #createRawChannel}.
                     */
                    // @ts-ignore
                    getOrCreateRaw(plugin: java.lang.Object | any, channel: java.lang.String | string): org.spongepowered.api.network.ChannelBinding.RawDataChannel
                    /**
                     * Remove the channel binding from this registrar, freeing up the channel
                     * name. All method calls on the channel binding instance will now throw
                     * {@link IllegalStateException}.
                     * @param channel The channel to unbind
                     */
                    // @ts-ignore
                    unbindChannel(channel: org.spongepowered.api.network.ChannelBinding): void
                    /**
                     * Gets the set of registered channels.
                     * @param side The side to get the registered channels from
                     * @return A copy of the list of channels
                     */
                    // @ts-ignore
                    getRegisteredChannels(side: org.spongepowered.api.Platform.Type): Array<java.lang.String | string>
                    /**
                     * Returns whether the given channel name is available for creating with
                     * {@link #createChannel}.
                     * @param channelName The channel name to test
                     * @return True if available
                     */
                    // @ts-ignore
                    isChannelAvailable(channelName: java.lang.String | string): boolean
                }
            }
        }
    }
}
