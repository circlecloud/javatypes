declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace EndIsland {
                            /**
                             * A builder for constructing {@link EndIsland} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.EndIsland, org.spongepowered.api.world.gen.populator.EndIsland.Builder> {
                                /**
                                 * Sets the initial starting radius range of the island.
                                 * @param radius The new initial starting radius
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                startingRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.EndIsland.Builder
                                /**
                                 * Sets the initial starting radius of the island.
                                 * @param radius The new initial starting radius range
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                startingRadius(radius: number /*double*/): org.spongepowered.api.world.gen.populator.EndIsland.Builder
                                /**
                                 * Sets the amount that the radius decreases for every downward step.
                                 * @param radius The new radius decrement range
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                radiusDecrement(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.EndIsland.Builder
                                /**
                                 * Sets the amount that the radius decreases for every downward step.
                                 * @param radius The new radius decrement
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                radiusDecrement(radius: number /*double*/): org.spongepowered.api.world.gen.populator.EndIsland.Builder
                                /**
                                 * Sets the block state that the island will be formed from.
                                 * @param state The new island block state
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                islandBlock(state: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.EndIsland.Builder
                                /**
                                 * Sets the radius around the center (0, 0) of the world that this
                                 * populator will not apply to.
                                 * <p>This must be a positive value or zero.</p>
                                 * @param radius The exclusion radius
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                exclusionRadius(radius: number /*int*/): org.spongepowered.api.world.gen.populator.EndIsland.Builder
                                /**
                                 * Builds a new instance of a {@link EndIsland} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.EndIsland
                            }
                        }
                    }
                }
            }
        }
    }
}
