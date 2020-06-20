declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace server {
                    /**
                     * Called when a client pings the server from the server list.
                     * <p>
                     * If this event gets cancelled, it will close the client connection without
                     * sending any response.
                     * </p>
                     */
                    // @ts-ignore
                    interface ClientPingServerEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the client pinging the server.
                         * @return The client of the status request
                         */
                        // @ts-ignore
                        getClient(): org.spongepowered.api.network.status.StatusClient
                        /**
                         * Gets the response that is about to be sent to the client.
                         * @return The response to the status request
                         */
                        // @ts-ignore
                        getResponse(): org.spongepowered.api.event.server.ClientPingServerEvent.Response
                    }
                }
            }
        }
    }
}
