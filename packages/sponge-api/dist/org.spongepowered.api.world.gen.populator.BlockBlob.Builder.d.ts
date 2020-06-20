declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace BlockBlob {
                            /**
                             * A builder for constructing {@link BlockBlob} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.BlockBlob, org.spongepowered.api.world.gen.populator.BlockBlob.Builder> {
                                /**
                                 * Sets the {@link BlockState} that this populator will place down to
                                 * form the blob.
                                 * @param block the new block state
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                block(block: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.BlockBlob.Builder
                                /**
                                 * Sets the radius of the area for the blob, cannot be negative.
                                 * @param radius The new radius
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                radius(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.BlockBlob.Builder
                                /**
                                 * Sets the radius of the area for the blob, cannot be negative.
                                 * @param radius The new radius
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                radius(radius: number /*double*/): org.spongepowered.api.world.gen.populator.BlockBlob.Builder
                                /**
                                 * Sets the number of blobs to spawn per chunk, must be greater than
                                 * zero.
                                 * @param count The number of blobs to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                blobCount(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.BlockBlob.Builder
                                /**
                                 * Sets the number of blobs to spawn per chunk, must be greater than
                                 * zero.
                                 * @param count The number of blobs to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                blobCount(count: number /*int*/): org.spongepowered.api.world.gen.populator.BlockBlob.Builder
                                /**
                                 * Builds a new instance of a {@link BlockBlob} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.BlockBlob
                            }
                        }
                    }
                }
            }
        }
    }
}
