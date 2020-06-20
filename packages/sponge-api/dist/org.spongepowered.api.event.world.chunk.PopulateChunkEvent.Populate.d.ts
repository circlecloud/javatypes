declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        namespace PopulateChunkEvent {
                            /**
                             * Called when a populator is about to run against a chunk.
                             */
                            // @ts-ignore
                            interface Populate extends org.spongepowered.api.event.world.chunk.PopulateChunkEvent, org.spongepowered.api.event.Cancellable {
                                /**
                                 * Gets the populator which is about to be run.
                                 * @return The populator
                                 */
                                // @ts-ignore
                                getPopulator(): org.spongepowered.api.world.gen.Populator
                            }
                        }
                    }
                }
            }
        }
    }
}
