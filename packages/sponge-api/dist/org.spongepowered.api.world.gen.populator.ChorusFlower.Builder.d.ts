declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace ChorusFlower {
                            /**
                             * A builder for constructing {@link ChorusFlower} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.ChorusFlower, org.spongepowered.api.world.gen.populator.ChorusFlower.Builder> {
                                /**
                                 * Sets the radius around the center (0, 0) of the world that this
                                 * populator will not apply to.
                                 * <p> This must be a positive value or zero. </p>
                                 * @param radius The exclusion radius
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                exclusionRadius(radius: number /*int*/): org.spongepowered.api.world.gen.populator.ChorusFlower.Builder
                                /**
                                 * Builds a new instance of a {@link ChorusFlower} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.ChorusFlower
                            }
                        }
                    }
                }
            }
        }
    }
}
