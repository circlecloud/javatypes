declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace connection {
                    /**
                     * Represents a user attempting to log into the proxy.
                     */
                    // @ts-ignore
                    interface PendingConnection extends net.md_5.bungee.api.connection.Connection {
                        /**
                         * Get the requested username.
                         * @return the requested username, or null if not set
                         */
                        // @ts-ignore
                        getName(): string
                        /**
                         * Get the numerical client version of the player attempting to log in.
                         * @return the protocol version of the remote client
                         */
                        // @ts-ignore
                        getVersion(): number /*int*/
                        /**
                         * Get the requested virtual host that the client tried to connect to.
                         * @return request virtual host or null if invalid / not specified.
                         */
                        // @ts-ignore
                        getVirtualHost(): java.net.InetSocketAddress
                        /**
                         * Get the listener that accepted this connection.
                         * @return the accepting listener
                         */
                        // @ts-ignore
                        getListener(): net.md_5.bungee.api.config.ListenerInfo
                        /**
                         * Get this connection's UUID, if set.
                         * @return the UUID
                         * @deprecated In favour of {#link #getUniqueId()}
                         */
                        // @ts-ignore
                        getUUID(): string
                        /**
                         * Get this connection's UUID, if set.
                         * @return the UUID
                         */
                        // @ts-ignore
                        getUniqueId(): java.util.UUID
                        /**
                         * Set the connection's uuid
                         * @param uuid connection UUID
                         */
                        // @ts-ignore
                        setUniqueId(uuid: java.util.UUID): void
                        /**
                         * Get this connection's online mode.
                         * <br>
                         * See {@link #setOnlineMode(boolean)} for a description of how this option
                         * works.
                         * @return the online mode
                         */
                        // @ts-ignore
                        isOnlineMode(): boolean
                        /**
                         * Set this connection's online mode.
                         * <br>
                         * May be called only during the PlayerHandshakeEvent to set the online mode
                         * configuration setting for this connection only (i.e. whether or not the
                         * client will be treated as if it is connecting to an online mode server).
                         * @param onlineMode status
                         */
                        // @ts-ignore
                        setOnlineMode(onlineMode: boolean): void
                        /**
                         * Check if the client is using the older unsupported Minecraft protocol
                         * used by Minecraft clients older than 1.7.
                         * @return Whether the client is using a legacy client.
                         */
                        // @ts-ignore
                        isLegacy(): boolean
                    }
                }
            }
        }
    }
}
