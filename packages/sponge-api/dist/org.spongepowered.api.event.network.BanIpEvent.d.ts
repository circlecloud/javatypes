declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace network {
                    /**
                     * Called when a ban is made on an IP address.
                     */
                    // @ts-ignore
                    interface BanIpEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the ban made in this event.
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
