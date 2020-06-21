declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    namespace ChunkPreGenerationEvent {
                        /**
                         * Event fired when a step has completed. Cancelling this task
                         * will cancel the entire pre-generation.
                         */
                        // @ts-ignore
                        interface Post extends org.spongepowered.api.event.world.ChunkPreGenerationEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * The number of chunks generated during the previous step.
                             * @return The number of chunks that were generated.
                             */
                            // @ts-ignore
                            getChunksGeneratedThisStep(): number /*int*/
                            /**
                             * The number of chunks generated that did not need to be generated and
                             * were skipped over.
                             * @return The number of chunks that were generated.
                             */
                            // @ts-ignore
                            getChunksSkippedThisStep(): number /*int*/
                            /**
                             * The {@link Duration} of the previous step.
                             * @return The {#link Duration}
                             */
                            // @ts-ignore
                            getTimeTakenForStep(): java.time.Duration
                        }
                    }
                }
            }
        }
    }
}
