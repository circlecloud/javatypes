declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace action {
                    namespace CollideEvent {
                        /**
                         * Fired after an {@link Entity} or {@link BlockSnapshot} impact with each
                         * other.
                         * <p>Note: this should only fire once after the first impact.</p>
                         */
                        // @ts-ignore
                        interface Impact extends org.spongepowered.api.event.action.CollideEvent {
                            /**
                             * Gets the {@link Location} where the impact took place.
                             * @return The impact {#link Location}
                             */
                            // @ts-ignore
                            getImpactPoint(): org.spongepowered.api.world.Location<org.spongepowered.api.world.World>
                        }
                    }
                }
            }
        }
    }
}
