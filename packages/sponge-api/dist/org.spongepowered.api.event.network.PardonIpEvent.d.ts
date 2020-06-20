declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    /**
                     * Called when a pardon is made on an IP address.
                     */
                    // @ts-ignore
                    interface PardonIpEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the ban pardoned in this event.
                         * @return The ban
                         */
                        // @ts-ignore
                        getBan(): org.spongepowered.api.util.ban.Ban.Ip
                    }
                }
            }
        }
    }
}
