declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace connection {
                    /**
                     * A proxy connection is defined as a connection directly connected to a socket.
                     * It should expose information about the remote peer, however not be specific
                     * to a type of connection, whether server or player.
                     */
                    // @ts-ignore
                    interface Connection {
                        /**
                         * Gets the remote address of this connection.
                         * @return the remote address
                         */
                        // @ts-ignore
                        getAddress(): java.net.InetSocketAddress
                        /**
                         * Disconnects this end of the connection for the specified reason. If this
                         * is an {@link ProxiedPlayer} the respective server connection will be
                         * closed too.
                         * @param reason the reason shown to the player / sent to the server on
                         *  disconnect
                         */
                        // @ts-ignore
                        disconnect(reason: java.lang.String | string): void
                        /**
                         * Disconnects this end of the connection for the specified reason. If this
                         * is an {@link ProxiedPlayer} the respective server connection will be
                         * closed too.
                         * @param reason the reason shown to the player / sent to the server on
                         *  disconnect
                         */
                        // @ts-ignore
                        disconnect(...reason: BaseComponent[]): void
                        /**
                         * Disconnects this end of the connection for the specified reason. If this
                         * is an {@link ProxiedPlayer} the respective server connection will be
                         * closed too.
                         * @param reason the reason shown to the player / sent to the server on
                         *  disconnect
                         */
                        // @ts-ignore
                        disconnect(reason: BaseComponent): void
                        /**
                         * Gets whether this connection is currently open, ie: not disconnected, and
                         * able to send / receive data.
                         * @return current connection status
                         */
                        // @ts-ignore
                        isConnected(): boolean
                        /**
                         * Get the unsafe methods of this class.
                         * @return the unsafe method interface
                         */
                        // @ts-ignore
                        unsafe(): net.md_5.bungee.api.connection.Connection.Unsafe
                    }
                }
            }
        }
    }
}
