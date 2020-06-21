declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Ore {
                            /**
                             * A builder for constructing {@link Ore} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Ore, org.spongepowered.api.world.gen.populator.Ore.Builder> {
                                /**
                                 * Sets the block to place as ore.
                                 * @param block The new ore block
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                ore(block: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.Ore.Builder
                                /**
                                 * Sets the size of deposit of ore. This is the number of blocks per
                                 * clump of ores spawned.
                                 * @param size The new deposit size
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                size(size: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Ore.Builder
                                /**
                                 * Sets the size of deposit of ore. This is the number of blocks per
                                 * clump of ores spawned.
                                 * @param size The new deposit size
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                size(size: number /*int*/): org.spongepowered.api.world.gen.populator.Ore.Builder
                                /**
                                 * Sets the number of ore clumps to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new number of clumps to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Ore.Builder
                                /**
                                 * Sets the number of ore clumps to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new number of clumps to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.Ore.Builder
                                /**
                                 * Sets the height that the ore can generate at.
                                 * @param height The new height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                height(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Ore.Builder
                                /**
                                 * Sets a predicate which checks for the placement conditions for this
                                 * ore.
                                 * @param condition The new placement conditions check
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                placementCondition(condition: java.util.function$.Predicate<org.spongepowered.api.block.BlockState>): org.spongepowered.api.world.gen.populator.Ore.Builder
                                /**
                                 * Builds a new instance of a {@link Ore} populator with the settings
                                 * set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Ore
                            }
                        }
                    }
                }
            }
        }
    }
}
