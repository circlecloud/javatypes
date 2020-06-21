declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A volume containing blocks that can be accessed but not modified. The data
                     * will never change.
                     * @see BlockVolume
                     */
                    // @ts-ignore
                    interface ImmutableBlockVolume extends org.spongepowered.api.world.extent.UnmodifiableBlockVolume {
                        /**
                         * Returns a new volume that is the same or smaller than the current volume.
                         * This does not copy the blocks, it only provides a new view of the
                         * storage.
                         * @param newMin The new minimum coordinates in this volume
                         * @param newMax The new maximum coordinates in this volume
                         * @return The new volume with the new bounds
                         * @throws PositionOutOfBoundsException If the new minimum and maximum are
                         *          outside the current volume
                         */
                        // @ts-ignore
                        getBlockView(newMin: Vector3i, newMax: Vector3i): org.spongepowered.api.world.extent.ImmutableBlockVolume
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         * @param transform The transformation to be applied
                         * @return The new volume with the transform
                         */
                        // @ts-ignore
                        getBlockView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.ImmutableBlockVolume
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BlockVolume#getBlockMin()} returns {@link Vector3i#ZERO}. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         * @return The new volume with its minimum at zero
                         */
                        // @ts-ignore
                        getRelativeBlockView(): org.spongepowered.api.world.extent.ImmutableBlockVolume
                        // @ts-ignore
                        getImmutableBlockCopy(): org.spongepowered.api.world.extent.ImmutableBlockVolume
                        // @ts-ignore
                        getBlockWorker(): org.spongepowered.api.world.extent.worker.BlockVolumeWorker<any>
                    }
                }
            }
        }
    }
}
