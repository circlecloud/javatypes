declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    /**
                     * An event when a "fishing" action is performed. Always involves a
                     * {@link FishHook}.
                     */
                    // @ts-ignore
                    interface FishingEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the {@link FishHook} related with this event.
                         * @return The fish hook
                         */
                        // @ts-ignore
                        getFishHook(): org.spongepowered.api.entity.projectile.FishHook
                    }
                }
            }
        }
    }
}
