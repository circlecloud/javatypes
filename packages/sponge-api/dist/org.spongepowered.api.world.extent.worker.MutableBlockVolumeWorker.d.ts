declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    namespace worker {
                        /**
                         * Similar to {@link BlockVolumeWorker} but adds support for mutating the
                         * backing volume.
                         * @param <V> The type of volume being worked on
                         */
                        // @ts-ignore
                        interface MutableBlockVolumeWorker<V extends org.spongepowered.api.world.extent.MutableBlockVolume> extends org.spongepowered.api.world.extent.worker.BlockVolumeWorker<V> {
                            /**
                             * Similar to {@link BlockVolumeWorker#map(BlockVolumeMapper,
                             * MutableBlockVolume)} but uses the operating volume as the destination.
                             * Precautions must be taken as the volume is modified while the operation
                             * is being performed, and so the surrounding blocks might not be the
                             * original ones.
                             * @param mapper The mapping operation
                             */
                            // @ts-ignore
                            map(mapper: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeMapper): void
                            /**
                             * Similar to {@link BlockVolumeWorker#merge(BlockVolume, BlockVolumeMerger,
                             * MutableBlockVolume)} but uses the operating volume as the destination.
                             * Precautions must be taken as the volume is modified while the operation
                             * is being performed, and so the surrounding blocks might not be the
                             * original ones.
                             * @param right The right-hand operand of the merge operation
                             * @param merger The merging operation
                             */
                            // @ts-ignore
                            merge(right: org.spongepowered.api.world.extent.BlockVolume, merger: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeMerger): void
                            /**
                             * Applies a filler operation to the volume.
                             * @param filler The filler operation
                             */
                            // @ts-ignore
                            fill(filler: org.spongepowered.api.world.extent.worker.procedure.BlockVolumeFiller): void
                        }
                    }
                }
            }
        }
    }
}
