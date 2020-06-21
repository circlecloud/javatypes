declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                /**
                 * Represents a network channel bound to a {@link ChannelRegistrar}. The channel
                 * can be used to send and receive data. If this binding is removed by
                 * {@link ChannelRegistrar#unbindChannel}, all methods will throw
                 * {@link IllegalStateException}.
                 */
                // @ts-ignore
                interface ChannelBinding {
                    /**
                     * Gets the registrar that this channel is bound to.
                     * @return The registrar
                     */
                    // @ts-ignore
                    getRegistrar(): org.spongepowered.api.network.ChannelRegistrar
                    /**
                     * Gets this channel's bound name.
                     * @return The channel name
                     */
                    // @ts-ignore
                    getName(): string
                    /**
                     * Gets the plugin that created this binding.
                     * @return The owning plugin
                     */
                    // @ts-ignore
                    getOwner(): org.spongepowered.api.plugin.PluginContainer
                }
            }
        }
    }
}
