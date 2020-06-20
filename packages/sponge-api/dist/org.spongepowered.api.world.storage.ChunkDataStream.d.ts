declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace storage {
                    /**
                     * A chunk iterator represents a buffer for obtaining chunk data from storage
                     * without having to explicitly load into memory all available chunks. <p>This
                     * avoid loading all chunks into memory at once, reducing the memory footprint
                     * and persistence operations.</p> <p>The chunks are loaded individually in
                     * sequence. Strong references to the chunks represented by
                     * {@link DataContainer}s should be avoided <strong>AT ALL COSTS</strong>. The
                     * data represented is a copy and therefore shouldn't be considered synchronized
                     * to live data.</p>
                     * <p>This is a data stream from the chunk storage system and should be used in
                     * an asynchronous thread from the main thread.</p>
                     */
                    // @ts-ignore
                    interface ChunkDataStream {
                        /**
                         * Gets the next {@link Chunk} represented by a read only
                         * {@link DataContainer}.
                         * <p>This method BLOCKS the thread until the next available data has been
                         * read.</p>
                         * <p>This may not return a {@link DataContainer} in the event there is no
                         * chunk data available to read.</p>
                         * @return The chunk data represented by a data container
                         */
                        // @ts-ignore
                        next(): org.spongepowered.api.data.DataContainer
                        /**
                         * Checks if there is an available chunk to represent.
                         * @return Whether there is more data that can be read
                         */
                        // @ts-ignore
                        hasNext(): boolean
                        /**
                         * Gets the number of chunks available to read as {@link DataContainer}s.
                         * @return The number of remaining chunks available to read
                         */
                        // @ts-ignore
                        available(): int
                        /**
                         * Resets this stream to read from the beginning of the collection of
                         * chunks.
                         */
                        // @ts-ignore
                        reset(): void
                    }
                }
            }
        }
    }
}
