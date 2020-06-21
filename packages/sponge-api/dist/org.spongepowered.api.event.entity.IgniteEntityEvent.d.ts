declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    /**
                     * An event that occurs when an entity becomes ignited.
                     */
                    // @ts-ignore
                    interface IgniteEntityEvent extends org.spongepowered.api.event.entity.TargetEntityEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original amount of fire ticks the entity will remain on fire.
                         * @return The original fire ticks
                         */
                        // @ts-ignore
                        getOriginalFireTicks(): number /*int*/
                        /**
                         * Gets the amount of ticks the entity will remain on fire.
                         * @return The amount of ticks the entity will remain on fire
                         */
                        // @ts-ignore
                        getFireTicks(): number /*int*/
                        /**
                         * Sets the amount of ticks the entity will remain on fire.
                         * @param fireTicks The amount of ticks the entity will remain on fire
                         */
                        // @ts-ignore
                        setFireTicks(fireTicks: number /*int*/): void
                    }
                }
            }
        }
    }
}
