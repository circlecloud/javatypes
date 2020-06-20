declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace user {
                    /**
                     * Occurs when a user is pardoned.
                     */
                    // @ts-ignore
                    interface PardonUserEvent extends org.spongepowered.api.event.user.TargetUserEvent {
                        /**
                         * Gets the ban involved in this event.
                         * @return The ban
                         */
                        // @ts-ignore
                        getBan(): org.spongepowered.api.util.ban.Ban.Profile
                    }
                }
            }
        }
    }
}
