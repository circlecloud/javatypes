declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        namespace PopulateChunkEvent {
                            /**
                             * Called before a chunk begins populating.
                             */
                            // @ts-ignore
                            interface Pre extends org.spongepowered.api.event.world.chunk.PopulateChunkEvent {
                                /**
                                 * Returns a mutable list of all pending populators.
                                 * @return The populators
                                 */
                                // @ts-ignore
                                getPendingPopulators(): Array<org.spongepowered.api.world.gen.Populator>
                            }
                        }
                    }
                }
            }
        }
    }
}
