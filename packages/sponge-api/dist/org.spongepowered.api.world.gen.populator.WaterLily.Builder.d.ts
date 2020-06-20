declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace WaterLily {
                            /**
                             * A builder for constructing {@link WaterLily} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.WaterLily, org.spongepowered.api.world.gen.populator.WaterLily.Builder> {
                                /**
                                 * Sets the number of water lilies to attempt to spawn per chunk, must
                                 * be greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.WaterLily.Builder
                                /**
                                 * Sets the number of water lilies to attempt to spawn per chunk, must
                                 * be greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.WaterLily.Builder
                                /**
                                 * Builds a new instance of a {@link WaterLily} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.WaterLily
                            }
                        }
                    }
                }
            }
        }
    }
}
