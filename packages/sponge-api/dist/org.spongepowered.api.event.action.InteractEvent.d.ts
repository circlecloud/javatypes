declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    /**
                     * Base event for all interactions.
                     */
                    // @ts-ignore
                    interface InteractEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the point of interaction where the interaction occurred as
                         * a {@link Vector3d}.
                         * @return The interaction point if available
                         */
                        // @ts-ignore
                        getInteractionPoint(): java.util.Optional<Vector3d>
                    }
                }
            }
        }
    }
}
