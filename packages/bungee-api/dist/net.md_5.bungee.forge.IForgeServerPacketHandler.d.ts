declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                /**
                 * An interface that defines a Forge Handshake Server packet.
                 * @param <S> The State to transition to.
                 */
                // @ts-ignore
                interface IForgeServerPacketHandler<S> {
                    /**
                     * Handles any {@link net.md_5.bungee.protocol.packet.PluginMessage}
                     * packets.
                     * @param message The {#link net.md_5.bungee.protocol.packet.PluginMessage}
                     *  to handle.
                     * @param ch The {#link ChannelWrapper} to send packets to.
                     * @return The state to transition to.
                     */
                    // @ts-ignore
                    handle(message: PluginMessage, ch: net.md_5.bungee.netty.ChannelWrapper): S
                    /**
                     * Sends any {@link net.md_5.bungee.protocol.packet.PluginMessage} packets.
                     * @param message The {#link net.md_5.bungee.protocol.packet.PluginMessage}
                     *  to send.
                     * @param con The {#link net.md_5.bungee.UserConnection} to send packets to
                     *  or read from.
                     * @return The state to transition to.
                     */
                    // @ts-ignore
                    send(message: PluginMessage, con: net.md_5.bungee.UserConnection): S
                }
            }
        }
    }
}
