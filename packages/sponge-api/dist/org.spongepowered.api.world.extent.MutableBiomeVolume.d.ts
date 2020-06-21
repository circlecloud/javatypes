declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A volume containing biomes that can be accessed and modified.
                     * @see BiomeVolume
                     */
                    // @ts-ignore
                    interface MutableBiomeVolume extends org.spongepowered.api.world.extent.BiomeVolume {
                        /**
                         * Sets the biome at the given position in the world.
                         * @param position The position
                         * @param biome The biome
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBiome(position: Vector3i, biome: org.spongepowered.api.world.biome.BiomeType): void
                        /**
                         * Sets the biome at the given position in the world.
                         * @param x The X position
                         * @param y The Y position
                         * @param z The Z position
                         * @param biome The biome
                         * @throws PositionOutOfBoundsException If the position is outside of the
                         *          bounds of the volume
                         */
                        // @ts-ignore
                        setBiome(x: number /*int*/, y: number /*int*/, z: number /*int*/, biome: org.spongepowered.api.world.biome.BiomeType): void
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
                        getBiomeView(newMin: Vector3i, newMax: Vector3i): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         * @param transform The transformation to be applied
                         * @return The new volume with the transform
                         */
                        // @ts-ignore
                        getBiomeView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.MutableBiomeVolume
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BiomeVolume#getBiomeMin()} returns {@link Vector2i#ZERO}. This does
                         * not copy the biomes, it only provides a new view of the storage.
                         * @return The new volume with its minimum at zero
                         */
                        // @ts-ignore
                        getRelativeBiomeView(): org.spongepowered.api.world.extent.MutableBiomeVolume
                        // @ts-ignore
                        getBiomeWorker(): org.spongepowered.api.world.extent.worker.MutableBiomeVolumeWorker<any>
                    }
                }
            }
        }
    }
}
