declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                /**
                 * Represents a connection of a client to the server.
                 */
                // @ts-ignore
                interface PlayerConnection extends org.spongepowered.api.network.RemoteConnection {
                    /**
                     * Gets the associated {@link Player} for this connection.
                     * @return The associated player
                     */
                    // @ts-ignore
                    getPlayer(): org.spongepowered.api.entity.living.player.Player
                    /**
                     * Gets the connection latency. This is constantly calculated by the server.
                     * @return The latency
                     */
                    // @ts-ignore
                    getLatency(): int
                }
            }
        }
    }
}
