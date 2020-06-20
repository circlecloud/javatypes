declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Vine {
                            /**
                             * A builder for constructing {@link Vine} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Vine, org.spongepowered.api.world.gen.populator.Vine.Builder> {
                                /**
                                 * Sets the number of vines to attempt to spawn per chunk.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Vine.Builder
                                /**
                                 * Sets the number of vines to attempt to spawn per chunk.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.Vine.Builder
                                /**
                                 * Builds a new instance of a {@link Vine} populator with the settings
                                 * set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Vine
                            }
                        }
                    }
                }
            }
        }
    }
}
