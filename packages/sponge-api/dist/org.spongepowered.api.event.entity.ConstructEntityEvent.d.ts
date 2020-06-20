declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * Base event during the construction of an {@link Entity}.
                     */
                    // @ts-ignore
                    interface ConstructEntityEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the {@link Transform} that the {@link Entity} will be constructed with.
                         * @return The transform
                         */
                        // @ts-ignore
                        getTransform(): org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>
                        /**
                         * Gets the {@link EntityType} of the target {@link Entity} that is going to be
                         * constructed.
                         * @return The target entity type
                         */
                        // @ts-ignore
                        getTargetType(): org.spongepowered.api.entity.EntityType
                    }
                }
            }
        }
    }
}
