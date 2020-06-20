declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * Called when an {@link Entity} performs rotation of their body or, if
                     * applicable, head without moving their position.
                     */
                    // @ts-ignore
                    interface RotateEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the transform that the {@link Entity} rotated from.
                         * @return the previous transform
                         */
                        // @ts-ignore
                        getFromTransform(): org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>
                        /**
                         * Gets the new transform that the {@link Entity} will change to.
                         * @return the new transform
                         */
                        // @ts-ignore
                        getToTransform(): org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>
                        /**
                         * Sets the new transform that the {@link Entity} will change to.
                         * @param transform The new transform
                         */
                        // @ts-ignore
                        setToTransform(transform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>): void
                    }
                }
            }
        }
    }
}
