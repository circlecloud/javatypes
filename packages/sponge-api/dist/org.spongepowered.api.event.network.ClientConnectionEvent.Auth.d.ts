declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    namespace ClientConnectionEvent {
                        /**
                         * Called asynchronously when the client attempts to authenticate against
                         * the server.
                         * <p>Note: This event is fired before #Login.</p>
                         */
                        // @ts-ignore
                        interface Auth extends org.spongepowered.api.event.network.ClientConnectionEvent, org.spongepowered.api.event.message.MessageEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Gets the {@link RemoteConnection} representing the client connection.
                             * @return The remote connection
                             */
                            // @ts-ignore
                            getConnection(): org.spongepowered.api.network.RemoteConnection
                            /**
                             * Gets the profile of the client attempting to connect.
                             * @return The client's profile
                             */
                            // @ts-ignore
                            getProfile(): org.spongepowered.api.profile.GameProfile
                        }
                    }
                }
            }
        }
    }
}
