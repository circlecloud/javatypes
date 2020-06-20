declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace BreedEntityEvent {
                        /**
                         * Called when an {@link Animal} has made it known it is ready to breed.
                         */
                        // @ts-ignore
                        interface ReadyToMate extends org.spongepowered.api.event.entity.BreedEntityEvent {
                            // @ts-ignore
                            getTargetEntity(): org.spongepowered.api.entity.living.animal.Animal
                        }
                    }
                }
            }
        }
    }
}
