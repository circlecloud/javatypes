declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace server {
                    namespace ClientPingServerEvent {
                        namespace Response {
                            /**
                             * Represents the information about the players on the server, sent
                             * after the {@link ClientPingServerEvent}.
                             */
                            // @ts-ignore
                            interface Players extends org.spongepowered.api.network.status.StatusResponse.Players {
                                /**
                                 * Sets the amount of online players to display on the client.
                                 * @param online The amount of online players
                                 */
                                // @ts-ignore
                                setOnline(online: number /*int*/): void
                                /**
                                 * Sets the maximum amount of allowed players to display on the
                                 * client.
                                 * @param max The maximum amount of players
                                 */
                                // @ts-ignore
                                setMax(max: number /*int*/): void
                                /**
                                 * Gets an mutable list of online players on the server to display
                                 * on the client.
                                 * @return A mutable list of online players
                                 */
                                // @ts-ignore
                                getProfiles(): Array<org.spongepowered.api.profile.GameProfile>
                            }
                        }
                    }
                }
            }
        }
    }
}
