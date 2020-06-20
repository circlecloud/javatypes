declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Pumpkin {
                            /**
                             * A builder for constructing {@link Pumpkin} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Pumpkin, org.spongepowered.api.world.gen.populator.Pumpkin.Builder> {
                                /**
                                 * Sets the number of pumpkins to attempt to spawn per patch, must be
                                 * greater than zero.
                                 * @param count The new number to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Pumpkin.Builder
                                /**
                                 * Sets the number of pumpkins to attempt to spawn per patch, must be
                                 * greater than zero.
                                 * @param count The new number to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.Pumpkin.Builder
                                /**
                                 * Sets the probability of a pumpkin patch spawning within a chunk.
                                 * @param p The new probability of a patch spawning
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                chance(p: number /*double*/): org.spongepowered.api.world.gen.populator.Pumpkin.Builder
                                /**
                                 * Builds a new instance of a {@link Pumpkin} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Pumpkin
                            }
                        }
                    }
                }
            }
        }
    }
}
