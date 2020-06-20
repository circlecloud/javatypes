declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A volume containing blocks that can be at least accessed.
                     */
                    // @ts-ignore
                    interface BlockVolume {
                        /**
                         * Gets the block location with the lowest x, y and z that is still a valid
                         * position for {@link #getBlock(Vector3i)}.
                         * @return The lowest block location
                         */
                        // @ts-ignore
                        getBlockMin(): Vector3i
                        /**
                         * Gets the block location with the highest x, y and z that is still a valid
                         * position for {@link #getBlock(Vector3i)}.
                         * @return The highest block location
                         */
                        // @ts-ignore
                        getBlockMax(): Vector3i
                        /**
                         * Gets the size of the whole volume. Defined as <code>
                         * {@link #getBlockMax()} - {@link #getBlockMin()} + (1, 1, 1) </code>.
                         * @return The size
                         */
                        // @ts-ignore
                        getBlockSize(): Vector3i
                        /**
                         * Returns true if the block volume contains a block at the specified
                         * position. This is defined as <code>{{@link #getBlockMin()} <= position <=
                         * {@link #getBlockMax()}</code>
                         * @param position The position to check
                         * @return Whether or not the position has a block in this volume
                         */
                        // @ts-ignore
                        containsBlock(position: Vector3i): boolean
                        /**
                         * Returns true if the block volume contains a block at the specified
                         * position. This is defined as <code>{{@link #getBlockMin()} <= (x, y, z)
                         * <= {@link #getBlockMax()}</code>
                         * @param x The X coordinate to check
                         * @param y The Y coordinate to check
                         * @param z The Z coordinate to check
                         * @return Whether or not the position has a block in this volume
                         */
                        // @ts-ignore
                        containsBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): boolean
                        /**
                         * Gets a representation of the block at the given position.
                         * @param position The position
                         * @return The block
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        getBlock(position: Vector3i): org.spongepowered.api.block.BlockState
                        /**
                         * Gets a representation of the block at the given position.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return The block
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        getBlock(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.block.BlockState
                        /**
                         * Gets the base type of block.
                         * <p>The type does not include block data such as the contents of
                         * inventories.</p>
                         * @param position The position of the block
                         * @return The type of block
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the block volume
                         */
                        // @ts-ignore
                        getBlockType(position: Vector3i): org.spongepowered.api.block.BlockType
                        /**
                         * Gets the base type of block.
                         * <p>The type does not include block data such as the contents of
                         * inventories.</p>
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return The type of block
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the block volume
                         */
                        // @ts-ignore
                        getBlockType(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.block.BlockType
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
                        getBlockView(newMin: Vector3i, newMax: Vector3i): org.spongepowered.api.world.extent.BlockVolume
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         * @param transform The transformation to be applied
                         * @return The new volume with the transform
                         */
                        // @ts-ignore
                        getBlockView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.BlockVolume
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BlockVolume#getBlockMin()} returns {@link Vector3i#ZERO}. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         * @return The new volume with its minimum at zero
                         */
                        // @ts-ignore
                        getRelativeBlockView(): org.spongepowered.api.world.extent.BlockVolume
                        /**
                         * Returns a new volume that cannot be modified through this view. Unlike
                         * immutable storage, it can be changed by holders of mutable views. This
                         * does not copy the blocks, it only provides a new view of the storage.
                         * @return The new volume, which cannot be modified
                         */
                        // @ts-ignore
                        getUnmodifiableBlockView(): org.spongepowered.api.world.extent.UnmodifiableBlockVolume
                        /**
                         * Returns a mutable copy of the blocks stored in this volume. This uses the
                         * default storage type of {@link StorageType#STANDARD}.
                         * @return A copy of the blocks
                         */
                        // @ts-ignore
                        getBlockCopy(): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns a mutable copy of the blocks stored in this volume. This uses the
                         * provided storage type.
                         * @param type The type of storage used by the new blocks
                         * @return A copy of the blocks
                         */
                        // @ts-ignore
                        getBlockCopy(type: org.spongepowered.api.world.extent.StorageType): org.spongepowered.api.world.extent.MutableBlockVolume
                        /**
                         * Returns an immutable copy of the blocks stored in this volume. This uses
                         * some internal storage solution that is thread-safe by nature.
                         * @return An immutable copy of the blocks
                         */
                        // @ts-ignore
                        getImmutableBlockCopy(): org.spongepowered.api.world.extent.ImmutableBlockVolume
                        /**
                         * Gets a new block worker for this block volume.
                         * @return The block worker
                         */
                        // @ts-ignore
                        getBlockWorker(): org.spongepowered.api.world.extent.worker.BlockVolumeWorker<? extends org.spongepowered.api.world.extent.BlockVolume>
                    }
                }
            }
        }
    }
}
