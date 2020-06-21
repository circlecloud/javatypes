declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A volume containing biomes that can be at least accessed.
                     * <p>In vanilla, the y coordinate is always zero.</p>
                     */
                    // @ts-ignore
                    interface BiomeVolume {
                        /**
                         * Gets the biome location with the lowest x and y that is still a valid
                         * position for {@link #getBiome(Vector3i)}.
                         * @return The lowest biome location
                         */
                        // @ts-ignore
                        getBiomeMin(): Vector3i
                        /**
                         * Gets the biome location with the highest x and y that is still a valid
                         * position for {@link #getBiome(Vector3i)}.
                         * @return The highest biome location.
                         */
                        // @ts-ignore
                        getBiomeMax(): Vector3i
                        /**
                         * Gets the size of the volume. Defined as <code>{@link #getBiomeMax()} -
                         * {@link #getBiomeMin()} + (1, 1)</code>.
                         * @return The size
                         */
                        // @ts-ignore
                        getBiomeSize(): Vector3i
                        /**
                         * Returns true if the biome volume contains a biome at the specified
                         * position. This is defined as <code>{{@link #getBiomeMin()} <= position
                         * <= {@link #getBiomeMax()}</code>
                         * @param position The position to check
                         * @return Whether or not the position has a biome in this volume
                         */
                        // @ts-ignore
                        containsBiome(position: Vector3i): boolean
                        /**
                         * Returns true if the biome volume contains a biome at the specified
                         * position. This is defined as <code>{{@link #getBiomeMin()} <= (x, y, z)
                         * <= {@link #getBiomeMax()}</code>
                         * @param x The X coordinate to check
                         * @param y The Y coordinate to check
                         * @param z The Z coordinate to check
                         * @return Whether or not the position has a biome in this volume
                         */
                        // @ts-ignore
                        containsBiome(x: number /*int*/, y: number /*int*/, z: number /*int*/): boolean
                        /**
                         * Gets an object representing the biome at the given position.
                         * @param position The position
                         * @return The biome
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        getBiome(position: Vector3i): org.spongepowered.api.world.biome.BiomeType
                        /**
                         * Gets the {@link BiomeType} at the given location.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @return The biome
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        getBiome(x: number /*int*/, y: number /*int*/, z: number /*int*/): org.spongepowered.api.world.biome.BiomeType
                        /**
                         * Returns a new volume that is the same or smaller than the current volume.
                         * This does not copy the biomes, it only provides a new view of the
                         * storage.
                         * @param newMin The new minimum coordinates in this volume
                         * @param newMax The new maximum coordinates in this volume
                         * @return The new volume with the new bounds
                         * @throws PositionOutOfBoundsException If the new minimum and maximum are
                         *          outside the current volume
                         */
                        // @ts-ignore
                        getBiomeView(newMin: Vector3i, newMax: Vector3i): org.spongepowered.api.world.extent.BiomeVolume
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         * @param transform The transformation to be applied
                         * @return The new volume with the transform
                         */
                        // @ts-ignore
                        getBiomeView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.BiomeVolume
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BiomeVolume#getBiomeMin()} returns {@link Vector2i#ZERO}. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         * @return The new volume with its minimum at zero
                         */
                        // @ts-ignore
                        getRelativeBiomeView(): org.spongepowered.api.world.extent.BiomeVolume
                        /**
                         * Returns a new volume that cannot be modified through this view. Unlike
                         * immutable storage, it can be changed by holders of mutable views. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         * @return The new volume, which cannot be modified
                         */
                        // @ts-ignore
                        getUnmodifiableBiomeView(): org.spongepowered.api.world.extent.UnmodifiableBiomeVolume
                        /**
                         * Returns a mutable copy of the biomes stored in this volume. This uses the
                         * default storage type of {@link StorageType#STANDARD}.
                         * @return A copy of the biomes
                         */
                        // @ts-ignore
                        getBiomeCopy(): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a mutable copy of the biomes stored in this volume. This uses the
                         * provided storage type.
                         * @param type The type of storage used by the new biomes
                         * @return A copy of the biomes
                         */
                        // @ts-ignore
                        getBiomeCopy(type: org.spongepowered.api.world.extent.StorageType): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns an immutable copy of the biomes stored in this volume. This uses
                         * some internal storage solution that is thread-safe by nature.
                         * @return An immutable copy of the biomes
                         */
                        // @ts-ignore
                        getImmutableBiomeCopy(): org.spongepowered.api.world.extent.ImmutableBiomeVolume
                        /**
                         * Gets a new biome worker for this biome volume.
                         * @return The biome worker
                         */
                        // @ts-ignore
                        getBiomeWorker(): org.spongepowered.api.world.extent.worker.BiomeVolumeWorker<any>
                    }
                }
            }
        }
    }
}
