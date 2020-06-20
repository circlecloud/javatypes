declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace status {
                    /**
                     * Represents a client requesting a {@link StatusResponse}. Unlike normal player
                     * connections, it may not have the same version as the server.
                     */
                    // @ts-ignore
                    interface StatusClient {
                        /**
                         * Gets the address of the client.
                         * @return The address of the client
                         */
                        // @ts-ignore
                        getAddress(): java.net.InetSocketAddress
                        /**
                         * Gets the game version of the client.
                         * @return The version of the client
                         */
                        // @ts-ignore
                        getVersion(): org.spongepowered.api.MinecraftVersion
                        /**
                         * Gets the address the player is connecting to.
                         * @return The address the player is connecting to, or
                         *          {#link Optional#empty()} if not available (for example because
                         *          of {@link MinecraftVersion#isLegacy()}).
                         */
                        // @ts-ignore
                        getVirtualHost(): java.util.Optional<java.net.InetSocketAddress>
                    }
                }
            }
        }
    }
}
