declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Fossil {
                            /**
                             * A builder for constructing {@link Fossil} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Fossil, org.spongepowered.api.world.gen.populator.Fossil.Builder> {
                                /**
                                 * Sets the probability of a fossil spawning.
                                 * @param p The new spawn probability
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                probability(p: number /*double*/): org.spongepowered.api.world.gen.populator.Fossil.Builder
                                /**
                                 * Builds a new instance of a {@link Fossil} populator with the settings
                                 * set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Fossil
                            }
                        }
                    }
                }
            }
        }
    }
}
