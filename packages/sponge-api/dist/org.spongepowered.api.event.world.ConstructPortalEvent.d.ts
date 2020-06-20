declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    /**
                     * An event where a portal is created. Usually, this happens after a
                     * {@link ChangeBlockEvent} from any source.
                     */
                    // @ts-ignore
                    interface ConstructPortalEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the position location of a portal.
                         * @return The location of a portal
                         */
                        // @ts-ignore
                        getPortalLocation(): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                    }
                }
            }
        }
    }
}
