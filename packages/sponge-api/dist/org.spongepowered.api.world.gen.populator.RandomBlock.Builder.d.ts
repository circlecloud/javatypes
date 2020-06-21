declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace RandomBlock {
                            /**
                             * A builder for constructing {@link RandomBlock} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.RandomBlock, org.spongepowered.api.world.gen.populator.RandomBlock.Builder> {
                                /**
                                 * Sets the {@link BlockState} that this populator will randomly
                                 * distribute.
                                 * @param block The new block state
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                block(block: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.RandomBlock.Builder
                                /**
                                 * Sets the number of blocks to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new number to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.RandomBlock.Builder
                                /**
                                 * Sets the number of blocks to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new number to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.RandomBlock.Builder
                                /**
                                 * Sets the {@link Predicate} that this populator used to determine of a
                                 * given {@link BlockType} is valid to attempt to place a block of fire
                                 * on top of.
                                 * @param target The new targeted block predicate
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                placementTarget(target: java.util.function$.Predicate<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>): org.spongepowered.api.world.gen.populator.RandomBlock.Builder
                                /**
                                 * Sets the height range of the random block placement.
                                 * @param height The new height range
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.RandomBlock.Builder
                                /**
                                 * Builds a new instance of a {@link RandomBlock} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.RandomBlock
                            }
                        }
                    }
                }
            }
        }
    }
}
