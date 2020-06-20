declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * An volume containing biomes that can be accessed but not modified. The data
                     * will never change.
                     * @see BiomeVolume
                     */
                    // @ts-ignore
                    interface ImmutableBiomeVolume extends org.spongepowered.api.world.extent.UnmodifiableBiomeVolume {
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
                        getBiomeView(newMin: Vector3i, newMax: Vector3i): org.spongepowered.api.world.extent.ImmutableBiomeVolume
                        /**
                         * Returns a new volume that is viewed through some transformation. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         * @param transform The transformation to be applied
                         * @return The new volume with the transform
                         */
                        // @ts-ignore
                        getBiomeView(transform: org.spongepowered.api.util.DiscreteTransform3): org.spongepowered.api.world.extent.ImmutableBiomeVolume
                        /**
                         * Returns a new volume that is translated so that
                         * {@link BiomeVolume#getBiomeMin()} returns {@link Vector2i#ZERO}. This
                         * does not copy the biomes, it only provides a new view of the storage.
                         * @return The new volume with its minimum at zero
                         */
                        // @ts-ignore
                        getRelativeBiomeView(): org.spongepowered.api.world.extent.ImmutableBiomeVolume
                        // @ts-ignore
                        getImmutableBiomeCopy(): org.spongepowered.api.world.extent.ImmutableBiomeVolume
                        // @ts-ignore
                        getBiomeWorker(): org.spongepowered.api.world.extent.worker.BiomeVolumeWorker<? extends org.spongepowered.api.world.extent.ImmutableBiomeVolume>
                    }
                }
            }
        }
    }
}
