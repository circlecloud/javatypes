declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        /**
                         * Similar to {@link BiomeVolumeWorker} but adds support for mutating the backing
                         * volume.
                         * @param <A> The type of volume being worked on
                         */
                        // @ts-ignore
                        interface MutableBiomeVolumeWorker<A extends org.spongepowered.api.world.extent.MutableBiomeVolume> extends org.spongepowered.api.world.extent.worker.BiomeVolumeWorker<A> {
                            /**
                             * Similar to {@link BiomeVolumeWorker#map(BiomeVolumeMapper,
                             * MutableBiomeVolume)} but uses the operating volume as the destination.
                             * Precautions must be taken as the volume is modified while the operation
                             * is being performed, and so the surrounding blocks might not be the
                             * original ones.
                             * @param mapper The mapping operation
                             */
                            // @ts-ignore
                            map(mapper: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeMapper): void
                            /**
                             * Similar to {@link BiomeVolumeWorker#merge(BiomeVolume, BiomeVolumeMerger,
                             * MutableBiomeVolume)} but uses the operating volume as the destination.
                             * Precautions must be taken as the volume is modified while the operation
                             * is being performed, and so the surrounding blocks might not be the
                             * original ones.
                             * @param right the right-hand operand for the merge operation
                             * @param merger The merging operation
                             */
                            // @ts-ignore
                            merge(right: org.spongepowered.api.world.extent.BiomeVolume, merger: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeMerger): void
                            /**
                             * Applies a filler operation to the volume.
                             * @param filler The filler operation
                             */
                            // @ts-ignore
                            fill(filler: org.spongepowered.api.world.extent.worker.procedure.BiomeVolumeFiller): void
                        }
                    }
                }
            }
        }
    }
}
