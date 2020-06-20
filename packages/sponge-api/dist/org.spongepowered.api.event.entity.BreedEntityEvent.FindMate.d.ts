declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace BreedEntityEvent {
                        /**
                         * Called when an {@link Animal} finds an {@link Animal} to mate with.
                         */
                        // @ts-ignore
                        interface FindMate extends org.spongepowered.api.event.entity.BreedEntityEvent, org.spongepowered.api.event.TristateResult {
                            /**
                             * Returns the {@link Animal} this entity will mate with.
                             * @return the mate
                             */
                            // @ts-ignore
                            getMatingEntity(): org.spongepowered.api.entity.living.animal.Animal
                        }
                    }
                }
            }
        }
    }
}
