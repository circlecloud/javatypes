declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace user {
                    /**
                     * An event where a {@link User} is the target. The action and source may not
                     * be known.
                     */
                    // @ts-ignore
                    interface TargetUserEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the targeted {@link User}.
                         * @return The targeted user
                         */
                        // @ts-ignore
                        getTargetUser(): org.spongepowered.api.entity.living.player.User
                    }
                }
            }
        }
    }
}
