declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace status {
                    /**
                     * Represents the response to a status request. Unlike {@link ClientPingServerEvent}
                     * this is immutable.
                     * <p>
                     * This interface exists mostly for convenience and can be implemented in a
                     * library pinging other servers for example.
                     * </p>
                     * @see ClientPingServerEvent
                     */
                    // @ts-ignore
                    interface StatusResponse {
                        /**
                         * Gets the description (MOTD) of the status response.
                         * @return The description to display
                         */
                        // @ts-ignore
                        getDescription(): org.spongepowered.api.text.Text
                        /**
                         * Gets player count and the list of players currently playing on the
                         * server.
                         * @return The player information, or {#link Optional#empty()} if not
                         *          available
                         */
                        // @ts-ignore
                        getPlayers(): java.util.Optional<any>
                        /**
                         * Gets the version of the server displayed when the client or the server
                         * are outdated.
                         * @return The server version
                         */
                        // @ts-ignore
                        getVersion(): org.spongepowered.api.MinecraftVersion
                        /**
                         * Gets the {@link Favicon} of the server.
                         * @return The favicon, or {#link Optional#empty()} if not available
                         */
                        // @ts-ignore
                        getFavicon(): java.util.Optional<org.spongepowered.api.network.status.Favicon>
                    }
                }
            }
        }
    }
}
