declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace SeaFloor {
                            /**
                             * A builder for constructing {@link SeaFloor} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.SeaFloor, org.spongepowered.api.world.gen.populator.SeaFloor.Builder> {
                                /**
                                 * Sets the {@link BlockState} to place down.
                                 * @param block The new block to place
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                block(block: org.spongepowered.api.block.BlockState): org.spongepowered.api.world.gen.populator.SeaFloor.Builder
                                /**
                                 * Sets the number of discs to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.SeaFloor.Builder
                                /**
                                 * Sets the number of discs to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.SeaFloor.Builder
                                /**
                                 * Sets the radius of the discs being spawned.
                                 * @param radius The new disc radius
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                radius(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.SeaFloor.Builder
                                /**
                                 * Sets the radius of the discs being spawned.
                                 * @param radius The new disc radius
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                radius(radius: number /*double*/): org.spongepowered.api.world.gen.populator.SeaFloor.Builder
                                /**
                                 * Sets the depth of the sea floor cover to generate.
                                 * @param depth The new depth
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                depth(depth: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.SeaFloor.Builder
                                /**
                                 * Sets the depth of the sea floor cover to generate.
                                 * @param depth The new depth
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                depth(depth: number /*int*/): org.spongepowered.api.world.gen.populator.SeaFloor.Builder
                                /**
                                 * Sets the predicate which will be applied to all {@link BlockState}s
                                 * that this populator attempts to replace in order to determine if they
                                 * are valid.
                                 * @param check The new replacement check
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                replace(check: java.util.function$.Predicate<org.spongepowered.api.block.BlockState>): org.spongepowered.api.world.gen.populator.SeaFloor.Builder
                                /**
                                 * Builds a new instance of a {@link SeaFloor} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.SeaFloor
                            }
                        }
                    }
                }
            }
        }
    }
}
