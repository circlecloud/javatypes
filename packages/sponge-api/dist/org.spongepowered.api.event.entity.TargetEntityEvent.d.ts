declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * Base event for when a {@link Entity} is a target.
                     */
                    // @ts-ignore
                    interface TargetEntityEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the target {@link Entity}.
                         * @return The entity
                         */
                        // @ts-ignore
                        getTargetEntity(): org.spongepowered.api.entity.Entity
                    }
                }
            }
        }
    }
}
