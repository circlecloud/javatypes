declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    /**
                     * Base event for when a {@link ChunkPreGenerate} task
                     * is underway.
                     */
                    // @ts-ignore
                    interface ChunkPreGenerationEvent extends org.spongepowered.api.event.world.TargetWorldEvent {
                        /**
                         * The object that contains the progress information for the
                         * current {@link ChunkPreGenerate}.
                         * @return The {#link ChunkPreGenerate}
                         */
                        // @ts-ignore
                        getChunkPreGenerate(): org.spongepowered.api.world.ChunkPreGenerate
                    }
                }
            }
        }
    }
}
