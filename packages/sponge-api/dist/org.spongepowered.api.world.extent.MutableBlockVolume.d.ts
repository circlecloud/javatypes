declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A volume containing blocks that can be accessed and modified.
                     * @see BlockVolume
                     */
                    // @ts-ignore
                    interface MutableBlockVolume extends org.spongepowered.api.world.extent.BlockVolume {
                        /**
                         * Sets the block at the given position in the world.
                         * @param position The position
                         * @param block The block
                         * @return Whether the block change was successful
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBlock(position: Vector3i, block: org.spongepowered.api.block.BlockState): boolean
                        /**
                         * Sets the block at the given position in the world.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param block The block
                         * @return Whether the block change was successful
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/, block: org.spongepowered.api.block.BlockState): boolean
                        /**
                         * Replace the block at this position by a new type.
                         * <p>This will remove any extended block data at the given position.</p>
                         * @param position The position of the block
                         * @param type The new type
                         * @return Whether the block change was successful
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBlockType(position: Vector3i, type: org.spongepowered.api.block.BlockType): boolean
                        /**
                         * Replace the block at this position by a new type.
                         * <p>This will remove any extended block data at the given position.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param type The new type
                         * @return Whether the block change was successful
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBlockType(x: number /*int*/, y: number /*int*/, z: number /*int*/, type: org.spongepowered.api.block.BlockType): boolean
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
                        getBlockView(newMin: Vector3i, newMax: Vector3i): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         * @param transform The transformation to be applied
                         * @return The new volume with the transform
                         */
                        // @ts-ignore
                        getBlockView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BlockVolume#getBlockMin()} returns {@link Vector3i#ZERO}. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         * @return The new volume with its minimum at zero
                         */
                        // @ts-ignore
                        getRelativeBlockView(): org.spongepowered.api.world.extent.MutableBlockVolume
                        // @ts-ignore
                        getBlockWorker(): org.spongepowered.api.world.extent.worker.MutableBlockVolumeWorker<any>
                    }
                }
            }
        }
    }
}
