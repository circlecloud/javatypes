declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace forge {
                /**
                 * An interface that defines a Forge Handshake Client packet.
                 * @param <S> The State to transition to.
                 */
                // @ts-ignore
                interface IForgeClientPacketHandler<S> {
                    /**
                     * Handles any {@link PluginMessage} packets.
                     * @param message The {#link PluginMessage} to handle.
                     * @param con The {#link UserConnection} to send packets to.
                     * @return The state to transition to.
                     */
                    // @ts-ignore
                    handle(message: PluginMessage, con: net.md_5.bungee.UserConnection): S
                    /**
                     * Sends any {@link PluginMessage} packets.
                     * @param message The {#link PluginMessage} to send.
                     * @param con The {#link UserConnection} to set data.
                     * @return The state to transition to.
                     */
                    // @ts-ignore
                    send(message: PluginMessage, con: net.md_5.bungee.UserConnection): S
                }
            }
        }
    }
}
