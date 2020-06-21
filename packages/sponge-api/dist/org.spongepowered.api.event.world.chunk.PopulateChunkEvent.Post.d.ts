declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        namespace PopulateChunkEvent {
                            /**
                             * Called when a chunk finishes populating.
                             */
                            // @ts-ignore
                            interface Post extends org.spongepowered.api.event.world.chunk.PopulateChunkEvent {
                                /**
                                 * Returns a copy of the {@link Populator}s that ran
                                 * on this {@link Chunk}.
                                 * @return The populators
                                 */
                                // @ts-ignore
                                getAppliedPopulators(): Array<org.spongepowered.api.world.gen.Populator>
                            }
                        }
                    }
                }
            }
        }
    }
}
