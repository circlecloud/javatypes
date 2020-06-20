declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                /**
                 * Represents an ongoing chunk pre-generation.
                 */
                // @ts-ignore
                interface ChunkPreGenerate {
                    /**
                     * The {@link WorldProperties} of the world that this task is operating on.
                     * @return The {#link WorldProperties}
                     */
                    // @ts-ignore
                    getWorldProperties(): org.spongepowered.api.world.storage.WorldProperties
                    /**
                     * The total number of chunks generated during this generation.
                     * @return The number of chunks.
                     */
                    // @ts-ignore
                    getTotalGeneratedChunks(): int
                    /**
                     * The total number of chunks skipped during this generation.
                     * @return The number of chunks.
                     */
                    // @ts-ignore
                    getTotalSkippedChunks(): int
                    /**
                     * The target number of chunks that will be generated or skipped
                     * during this generation. This includes chunks already generated
                     * or skipped.
                     * @return The total number of chunks to be generated.
                     */
                    // @ts-ignore
                    getTargetTotalChunks(): int
                    /**
                     * Gets the total wall clock time it has taken (so far) to generate
                     * chunks.
                     * @return A {#link Duration} representing the amount of time taken
                     *          so far.
                     */
                    // @ts-ignore
                    getTotalTime(): java.time.Duration
                    /**
                     * Gets whether the task for this world has been cancelled
                     * (or completed).
                     * @return True if cancelled.
                     */
                    // @ts-ignore
                    isCancelled(): boolean
                    /**
                     * Cancels this pre-generation if it is still running.
                     */
                    // @ts-ignore
                    cancel(): void
                }
            }
        }
    }
}
