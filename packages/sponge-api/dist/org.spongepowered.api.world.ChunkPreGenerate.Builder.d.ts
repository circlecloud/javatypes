declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkPreGenerate {
                    /**
                     * A builder for submitting a task to pre-generate chunks.
                     * <p>The task is synchronous and repeating with a given interval and either
                     * a target number of chunks per ticks and/or a percentage of the tick
                     * time.</p>
                     * <p>Chunk order is not defined but a proper implementation should use and
                     * "inside-out" strategy for better results if the task is cancelled.</p>
                     * @see WorldBorder#newChunkPreGenerate(World)
                     * @see World#newChunkPreGenerate(Vector3d, double)
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.ChunkPreGenerate, org.spongepowered.api.world.ChunkPreGenerate.Builder> {
                        /**
                         * Sets the owner of the resulting task.
                         * <p>Mandatory.</p>
                         * @param plugin The owner plugin
                         * @return This for chained calls
                         */
                        // @ts-ignore
                        owner(plugin: any): org.spongepowered.api.world.ChunkPreGenerate.Builder
                        /**
                         * Adds a logger for logging generator efforts.
                         * <p>Optional. No effect if null is passed.</p>
                         * @param logger A logger for the generator
                         * @return This for chained calls
                         */
                        // @ts-ignore
                        logger(logger: Logger): org.spongepowered.api.world.ChunkPreGenerate.Builder
                        /**
                         * Sets the number of ticks between generation runs.
                         * <p>Must be greater than 0.</p>
                         * <p>Optional.</p>
                         * <p>Default is 4.</p>
                         * @param tickInterval The tick interval
                         * @return This for chained calls
                         */
                        // @ts-ignore
                        tickInterval(tickInterval: number /*int*/): org.spongepowered.api.world.ChunkPreGenerate.Builder
                        /**
                         * Sets maximum number of chunks per tick to generate.
                         * <p>Use a value smaller or equal to 0 to disable.</p>
                         * <p>Optional if {@link #tickPercentLimit(float)} is used.</p>
                         * <p>Default is disabled.</p>
                         * @param chunkCount The maximum number of chunks to generate
                         * @return This for chained calls
                         */
                        // @ts-ignore
                        chunksPerTick(chunkCount: number /*int*/): org.spongepowered.api.world.ChunkPreGenerate.Builder
                        /**
                         * Sets the limit of tick time that can be used to generate chunks as a
                         * percentage of {@link Scheduler#getPreferredTickInterval()}. The
                         * percentage must be a value in the range (0, 1]. No estimation is
                         * used to decide when to stop so the actual value will always be
                         * somewhere above the given percentage.
                         * <p>Use a value smaller or equal to 0 to disable.</p>
                         * <p>Optional if {@link #chunksPerTick(int)} is used.</p>
                         * <p>Default is 80%.</p>
                         * @param tickPercent The maximum percentage of the tick time to use
                         *                     for this generation pass.
                         * @return This for chained calls
                         */
                        // @ts-ignore
                        tickPercentLimit(tickPercent: number /*float*/): org.spongepowered.api.world.ChunkPreGenerate.Builder
                        /**
                         * Adds a {@link ChunkPreGenerationEvent} listener callback that will be
                         * called for this, and only this, pre-generation routine. Note that
                         * this does not change whether the various {@link ChunkPreGenerationEvent}
                         * events will be called, this is a convenience method to simply setup
                         * a listener bound to this pre-generation.
                         * @param listener The {#link Consumer} that will handle the events.
                         * @return This for chained calls
                         */
                        // @ts-ignore
                        addListener(listener: java.util.function.Consumer<org.spongepowered.api.event.world.ChunkPreGenerationEvent> | java.util.function$.Consumer<org.spongepowered.api.event.world.ChunkPreGenerationEvent>): org.spongepowered.api.world.ChunkPreGenerate.Builder
                        /**
                         * Schedules the task with the {@link Game#getScheduler()}.
                         * @return The resulting {#link ChunkPreGenerate} that can be used
                         *          obtain progress
                         */
                        // @ts-ignore
                        start(): org.spongepowered.api.world.ChunkPreGenerate
                    }
                }
            }
        }
    }
}
