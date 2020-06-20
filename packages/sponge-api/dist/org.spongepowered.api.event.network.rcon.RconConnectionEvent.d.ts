declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    namespace rcon {
                        /**
                         * An event that is associated with an {@link RconSource}.
                         */
                        // @ts-ignore
                        interface RconConnectionEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the {@link RconSource} responsible for the event.
                             * @return The {#link RconSource} responsible for the event
                             */
                            // @ts-ignore
                            getSource(): org.spongepowered.api.command.source.RconSource
                        }
                    }
                }
            }
        }
    }
}
