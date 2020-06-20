declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which places in a number of 'blobs' of a specific
                         * block state. The 'blob' is here defined as the union of three ellipsoids
                         * whose radii are set randomly between the base radius (inclusive) and the base
                         * radius plus the variance (exclusive).
                         */
                        // @ts-ignore
                        interface BlockBlob extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link BlockBlob} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.BlockBlob.Builder
                            /**
                             * Gets the {@link BlockState} that this populator will place down to form
                             * the blob.
                             * @return The block state
                             */
                            // @ts-ignore
                            getBlock(): org.spongepowered.api.block.BlockState
                            /**
                             * Sets the {@link BlockState} that this populator will place down to form
                             * the blob.
                             * @param state The new block state
                             */
                            // @ts-ignore
                            setBlock(state: org.spongepowered.api.block.BlockState): void
                            /**
                             * Gets the radius of the area for the blob.
                             * @return The radius
                             */
                            // @ts-ignore
                            getRadius(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the radius of the area for the blob, cannot be negative.
                             * @param radius The new radius
                             */
                            // @ts-ignore
                            setRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the radius of the area for the blob, cannot be negative.
                             * @param radius The new radius
                             */
                            // @ts-ignore
                            setRadius(radius: number /*double*/): void
                            /**
                             * Gets the number of blobs which will be placed per chunk.
                             * @return The number of blobs
                             */
                            // @ts-ignore
                            getCount(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of blobs to spawn per chunk, must be greater than zero.
                             * @param count The new number of blobs
                             */
                            // @ts-ignore
                            setCount(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of blobs to spawn per chunk, must be greater than zero.
                             * @param count The new number of blobs
                             */
                            // @ts-ignore
                            setCount(count: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
