declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace BreedEntityEvent {
                        /**
                         * Called when an {@link Animal} begins to breed with an {@link Animal}.
                         */
                        // @ts-ignore
                        interface Breed extends org.spongepowered.api.event.entity.BreedEntityEvent {
                            /**
                             * Gets the offspring {@link Entity}.
                             * @return the offspring
                             */
                            // @ts-ignore
                            getOffspringEntity(): org.spongepowered.api.entity.living.Ageable
                        }
                    }
                }
            }
        }
    }
}
