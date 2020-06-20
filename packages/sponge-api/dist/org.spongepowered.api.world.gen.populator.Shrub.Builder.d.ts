declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Shrub {
                            /**
                             * A builder for constructing {@link Shrub} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Shrub, org.spongepowered.api.world.gen.populator.Shrub.Builder> {
                                /**
                                 * Sets the number of shrubs to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount of shrubs to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Shrub.Builder
                                /**
                                 * Sets the number of shrubs to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount of shrubs to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.Shrub.Builder
                                /**
                                 * Sets the weighted {@link ShrubType}s to place.
                                 * @param types The new shrub types
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                types(types: org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.data.type.ShrubType>): org.spongepowered.api.world.gen.populator.Shrub.Builder
                                /**
                                 * Adds the weighted {@link ShrubType}s to the list of types.
                                 * @param type The new shrub type
                                 * @param weight The weight of the type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                type(type: org.spongepowered.api.data.type.ShrubType, weight: number /*int*/): org.spongepowered.api.world.gen.populator.Shrub.Builder
                                /**
                                 * Sets the overriding supplier. If the supplier is present then it is
                                 * used in place of the weighted table.
                                 * @param override The new supplier override, or null
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                supplier(override: java.util.function.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.ShrubType> | java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.ShrubType>): org.spongepowered.api.world.gen.populator.Shrub.Builder
                                /**
                                 * Builds a new instance of a {@link Shrub} populator with the settings
                                 * set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Shrub
                            }
                        }
                    }
                }
            }
        }
    }
}
