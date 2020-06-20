declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace IcePath {
                            /**
                             * A builder for constructing {@link IcePath} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.IcePath, org.spongepowered.api.world.gen.populator.IcePath.Builder> {
                                /**
                                 * Sets the radius of the path to spawn, cannot be negative.
                                 * @param radius The new path radius
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                radius(radius: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IcePath.Builder
                                /**
                                 * Sets the radius of the path to spawn, cannot be negative.
                                 * @param radius The new path radius
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                radius(radius: number /*double*/): org.spongepowered.api.world.gen.populator.IcePath.Builder
                                /**
                                 * Sets the number of sections to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param sections The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(sections: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.IcePath.Builder
                                /**
                                 * Sets the number of sections to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param sections The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(sections: number /*int*/): org.spongepowered.api.world.gen.populator.IcePath.Builder
                                /**
                                 * Builds a new instance of a {@link IcePath} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.IcePath
                            }
                        }
                    }
                }
            }
        }
    }
}
