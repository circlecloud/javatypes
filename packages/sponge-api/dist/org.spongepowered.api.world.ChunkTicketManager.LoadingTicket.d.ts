declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace ChunkTicketManager {
                    /**
                     * Represents a handle which allows you to force a set of chunks to remain
                     * loaded.
                     */
                    // @ts-ignore
                    interface LoadingTicket {
                        /**
                         * Sets the number of chunks this ticket will load at once.
                         * @param numChunks The number of chunks this ticket can load at once
                         * @return True if successful, false if the number of chunks is above
                         *      the maximum allowed for this ticket
                         */
                        // @ts-ignore
                        setNumChunks(numChunks: number /*int*/): boolean
                        /**
                         * Gets the number of chunks this ticket can load at once.
                         * @return The number of possible concurrently loaded chunks
                         */
                        // @ts-ignore
                        getNumChunks(): number /*int*/
                        /**
                         * Gets the maximum limit on the number of concurrently loaded chunks
                         * this ticket can have.
                         * @return The maximum allowed concurrently loaded chunks
                         */
                        // @ts-ignore
                        getMaxNumChunks(): number /*int*/
                        /**
                         * Gets the {@link World} passed when creating this ticket.
                         * @return The World object given to this ticket upon its creation
                         */
                        // @ts-ignore
                        getWorld(): org.spongepowered.api.world.World
                        /**
                         * Gets the companion data stored in a {@link DataContainer}. Note that
                         * the provided {@link DataContainer} is modifiable, but a copy of the
                         * internal container, and as such may need to be
                         * {@link #setCompanionData(DataContainer)} before modifications can
                         * be handled.
                         * <p>The sort of data stored in the container is plugin/mod dependent
                         * and is based on the original creator of this {@link LoadingTicket}.
                         * As such, the structure and particular data stored in the container
                         * is not concrete or defined in any specific way.</p>
                         * @return The companion data in the form of a data container
                         */
                        // @ts-ignore
                        getCompanionData(): org.spongepowered.api.data.DataContainer
                        /**
                         * Sets the companion data for this loading ticket.
                         * <p>The sort of data stored in the container is plugin/mod dependent
                         * and is based on the original creator of this {@link LoadingTicket}.
                         * As such, the structure and particular data stored in the container
                         * is not concrete or defined in any specific way.</p>
                         * @param container The container containing the companion data
                         */
                        // @ts-ignore
                        setCompanionData(container: org.spongepowered.api.data.DataContainer): void
                        /**
                         * Gets the ID of the plugin that this ticket belongs to.
                         * @return The ID of the plugin that registered this ticket
                         */
                        // @ts-ignore
                        getPlugin(): string
                        /**
                         * Gets the set of chunks that are being force-loaded by this ticket.
                         * @return The set of force-loaded chunks
                         */
                        // @ts-ignore
                        getChunkList(): object
                        /**
                         * Force-loads a chunk using this ticket. If the configured concurrently
                         * loaded chunk limit is reached, the oldest loaded chunk will be
                         * removed.
                         * <p>This does not cause an immediate load of the chunk. Forced chunks
                         * will be loaded eventually, but may not be available for a few ticks.
                         * Forced chunk loading is equivalent to the loading caused by a
                         * player.</p>
                         * @param chunk The chunk to force-load
                         */
                        // @ts-ignore
                        forceChunk(chunk: Vector3i): void
                        /**
                         * Removes a chunk from the force-loaded set of this ticket.
                         * @param chunk The chunk to remove from force-loading
                         */
                        // @ts-ignore
                        unforceChunk(chunk: Vector3i): void
                        /**
                         * Reorders a chunk to count as the 'newest' loaded chunk, making it the
                         * last chunk to be removed when adding more chunks for force-loading.
                         * @param chunk The chunk to reorder
                         */
                        // @ts-ignore
                        prioritizeChunk(chunk: Vector3i): void
                        /**
                         * Releases this ticket, removing all associated chunks and freeing up
                         * the ticket slot for later use by a new ticket.
                         * <p>After this operation the ticket is invalid and cannot be used to
                         * force-load chunks.</p>
                         */
                        // @ts-ignore
                        release(): void
                    }
                }
            }
        }
    }
}
