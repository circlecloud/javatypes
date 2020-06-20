declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Reed {
                            /**
                             * A builder for constructing {@link Reed} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Reed, org.spongepowered.api.world.gen.populator.Reed.Builder> {
                                /**
                                 * Sets the number of reeds to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Reed.Builder
                                /**
                                 * Sets the number of reeds to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.Reed.Builder
                                /**
                                 * Sets the height of the reeds to generate.
                                 * @param height The new reed height
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                reedHeight(height: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Reed.Builder
                                /**
                                 * Builds a new instance of a {@link Reed} populator with the settings
                                 * set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Reed
                            }
                        }
                    }
                }
            }
        }
    }
}
