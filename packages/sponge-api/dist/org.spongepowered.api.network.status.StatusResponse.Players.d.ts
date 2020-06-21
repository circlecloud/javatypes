declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace network {
                namespace status {
                    namespace StatusResponse {
                        /**
                         * Represents the player count, slots and a list of players current playing
                         * on a server.
                         */
                        // @ts-ignore
                        interface Players {
                            /**
                             * Gets the amount of online players on the server.
                             * @return The amount of online players
                             */
                            // @ts-ignore
                            getOnline(): number /*int*/
                            /**
                             * Gets the maximum amount of allowed players on the server.
                             * @return The maximum amount of allowed players
                             */
                            // @ts-ignore
                            getMax(): number /*int*/
                            /**
                             * Gets an immutable list of online players on the server to display on
                             * the client.
                             * @return An immutable list of online players
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
