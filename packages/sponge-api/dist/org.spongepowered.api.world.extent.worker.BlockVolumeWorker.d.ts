declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        /**
                         * A worker for a block volume. Used to perform operations on all the blocks it
                         * contains. When operations are done on multiple volumes, they are aligned on
                         * their minimum coordinates. The other volumes must be at least as big as the
                         * backing one.
                         * @param <V> The type of volume being worked on
                         */
                        // @ts-ignore
                        interface BlockVolumeWorker<V extends org.spongepowered.api.world.extent.BlockVolume> {
                            /**
                             * Returns the volume this worker operates on.
                             * @return The backing volume
                             */
                            // @ts-ignore
                            getVolume(): V
                            /**
                             * Applies a mapping operation to all the blocks in the volume and saves the
                             * results to the destination volume.
                             * @param mapper The mapping operation
                             * @param destination The destination volume
                             */
                            // @ts-ignore
                            map(mapper: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeMapper, destination: org.spongepowered.api.world.extent.MutableBlockVolume): void
                            /**
                             * Applies a merging operation to the blocks of the operating volume and an
                             * external one. Saves the results to the destination volume.
                             * @param second The volume to merge with
                             * @param merger The merging operation
                             * @param destination The destination volume
                             */
                            // @ts-ignore
                            merge(second: org.spongepowered.api.world.extent.BlockVolume, merger: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeMerger, destination: org.spongepowered.api.world.extent.MutableBlockVolume): void
                            /**
                             * Iterates this block volume, calling the visitor on each coordinate
                             * triplet.
                             * @param visitor The visitor
                             */
                            // @ts-ignore
                            iterate(visitor: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeVisitor<V>): void
                            /**
                             * Applies a reduction operation to the volume. The identity should be the
                             * result of no reduction being applied. For example, the additive identity
                             * is 0, the multiplicative one is 1 and the set union one is the empty
                             * set.
                             * @param reducer The reducing operation
                             * @param merge Merges two reductions into one
                             * @param identity The identity of the operation
                             * @param <T> The type of the reduction
                             * @return The reduction
                             */
                            // @ts-ignore
                            reduce<T>(reducer: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeReducer<T>, merge: java.util.function.BiFunction<T, T, T> | java.util.function$.BiFunction<T, T, T>, identity: T): T
                        }
                    }
                }
            }
        }
    }
}
