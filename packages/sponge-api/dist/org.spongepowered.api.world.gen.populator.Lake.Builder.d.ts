declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Lake {
                            /**
                             * A builder for constructing {@link Lake} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Lake, org.spongepowered.api.world.gen.populator.Lake.Builder> {
                                /**
                                 * Sets the {@link BlockState} of the liquid to fill the lake with.
                                 * @param liquid The new lake block state
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                liquidType(liquid: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.Lake.Builder
                                /**
                                 * Sets the probability of a lake spawning in a chunk.
                                 * @param p The new lake spawn probability
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                chance(p: number /*double*/): org.spongepowered.api.world.gen.populator.Lake.Builder
                                /**
                                 * Sets the height that the lake will be spawned at.
                                 * @param height The new height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Lake.Builder
                                /**
                                 * Builds a new instance of a {@link Lake} populator with the settings
                                 * set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Lake
                            }
                        }
                    }
                }
            }
        }
    }
}
