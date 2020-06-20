declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace chunk {
                        /**
                         * Base event for anything targeting a {@link Chunk}.
                         */
                        // @ts-ignore
                        interface TargetChunkEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the {@link Chunk} being changed.
                             * @return The Chunk
                             */
                            // @ts-ignore
                            getTargetChunk(): org.spongepowered.api.world.Chunk
                        }
                    }
                }
            }
        }
    }
}
