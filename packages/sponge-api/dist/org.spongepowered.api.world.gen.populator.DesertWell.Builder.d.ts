declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace DesertWell {
                            /**
                             * A builder for constructing {@link DesertWell} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.DesertWell, org.spongepowered.api.world.gen.populator.DesertWell.Builder> {
                                /**
                                 * Sets the probability of a desert well spawning.
                                 * @param p The new spawn probability
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                probability(p: number /*double*/): org.spongepowered.api.world.gen.populator.DesertWell.Builder
                                /**
                                 * Sets the {@link PopulatorObject} representing the well.
                                 * @param obj The new populator object
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                wellObject(obj: org.spongepowered.api.world.gen.PopulatorObject): org.spongepowered.api.world.gen.populator.DesertWell.Builder
                                /**
                                 * Builds a new instance of a {@link DesertWell} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.DesertWell
                            }
                        }
                    }
                }
            }
        }
    }
}
