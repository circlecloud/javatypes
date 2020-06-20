declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Forest {
                            /**
                             * A builder for constructing {@link Forest} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Forest, org.spongepowered.api.world.gen.populator.Forest.Builder> {
                                /**
                                 * Sets the number of trees to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Forest.Builder
                                /**
                                 * Sets the number of trees to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.Forest.Builder
                                /**
                                 * Sets the {@link BiomeTreeType}s to spawn.
                                 * @param types The new types to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                types(types: org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.world.gen.PopulatorObject>): org.spongepowered.api.world.gen.populator.Forest.Builder
                                /**
                                 * Sets the {@link BiomeTreeType} to the list of weighted types.
                                 * @param type The new type to add
                                 * @param weight The weight of the type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                type(type: org.spongepowered.api.world.gen.PopulatorObject, weight: number /*double*/): org.spongepowered.api.world.gen.populator.Forest.Builder
                                /**
                                 * Sets the overriding supplier. If the supplier is present then it is
                                 * used in place of the weighted table.
                                 * @param override The new supplier override, or null
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                supplier(override: java.util.function.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.world.gen.PopulatorObject> | java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.world.gen.PopulatorObject>): org.spongepowered.api.world.gen.populator.Forest.Builder
                                /**
                                 * Builds a new instance of a {@link Forest} populator with the settings
                                 * set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Forest
                            }
                        }
                    }
                }
            }
        }
    }
}
