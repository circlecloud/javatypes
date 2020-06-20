declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace source {
                    /**
                     * Represents an Rcon client.
                     */
                    // @ts-ignore
                    interface RconSource extends org.spongepowered.api.command.source.RemoteSource {
                        /**
                         * Gets whether this client is logged in, or authenticated.
                         * @return Whether this client is logged in
                         */
                        // @ts-ignore
                        getLoggedIn(): boolean
                        /**
                         * Sets whether this client is logged in, or authenticated.
                         * @param loggedIn Whether this client is logged in
                         */
                        // @ts-ignore
                        setLoggedIn(loggedIn: boolean): void
                    }
                }
            }
        }
    }
}
