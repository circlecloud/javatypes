declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace server {
                    namespace ClientPingServerEvent {
                        /**
                         * Represents a mutable response to a status request.
                         */
                        // @ts-ignore
                        interface Response extends org.spongepowered.api.network.status.StatusResponse {
                            /**
                             * Sets the description (MOTD) of the status response.
                             * @param description The description to display
                             */
                            // @ts-ignore
                            setDescription(description: org.spongepowered.api.text.Text): void
                            // @ts-ignore
                            getPlayers(): java.util.Optional<org.spongepowered.api.event.server.ClientPingServerEvent.Response.Players>
                            /**
                             * Sets whether the player count and the list of players on this server
                             * is hidden and doesn't get sent to the client. This will restore
                             * {@link #getPlayers()} if the players were previously hidden.
                             * <p>Use {@link #getPlayers()}.{@link Optional#isPresent() isPresent()} to
                             * check if the players are already hidden.</p>
                             * <p>In Vanilla, this will display {@code ???} instead of the player
                             * count in the server list.</p>
                             * @param hide {#code True} if the players should be hidden
                             */
                            // @ts-ignore
                            setHidePlayers(hide: boolean): void
                            /**
                             * Sets the {@link Favicon} to display on the client.
                             * @param favicon The favicon, or {#code null} for none
                             */
                            // @ts-ignore
                            setFavicon(favicon: org.spongepowered.api.network.status.Favicon): void
                        }
                    }
                }
            }
        }
    }
}
