declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    /**
                     * Fired when a channel is registered or unregistered.
                     * <p>If the channel is being registered on the server, the {@link Cause} will
                     * contain the {@link Player} who initiated the registration.</p>
                     */
                    // @ts-ignore
                    interface ChannelRegistrationEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the name of the channel being registered or unregistered.
                         * @return The channel name
                         */
                        // @ts-ignore
                        getChannel(): java.lang.String
                    }
                }
            }
        }
    }
}
