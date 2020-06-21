declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                /**
                 * Represents a handler for a message that was received over the network.
                 */
                // @ts-ignore
                interface MessageHandler<M extends org.spongepowered.api.network.Message> {
                    /**
                     * Handles the message sent by a remote connection.
                     * @param message The message received
                     * @param connection The connection that sent the message
                     * @param side The side the message was received on (
                     *         {#link org.spongepowered.api.Platform.Type#CLIENT}
                     *         or {@link org.spongepowered.api.Platform.Type#SERVER})
                     */
                    // @ts-ignore
                    handleMessage(message: M, connection: org.spongepowered.api.network.RemoteConnection, side: org.spongepowered.api.Platform.Type): void
                }
            }
        }
    }
}
