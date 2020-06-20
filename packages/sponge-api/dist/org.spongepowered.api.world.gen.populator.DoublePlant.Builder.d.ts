declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace DoublePlant {
                            /**
                             * A builder for constructing {@link DoublePlant} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.DoublePlant, org.spongepowered.api.world.gen.populator.DoublePlant.Builder> {
                                /**
                                 * Sets which plant types may be spawned in by this populator.
                                 * @param types Possible types
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                types(types: org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.data.type.DoublePlantType>): org.spongepowered.api.world.gen.populator.DoublePlant.Builder
                                /**
                                 * Adds a plant type to the list that may be spawned in by this
                                 * populator.
                                 * @param type The new plant type
                                 * @param weight The weight
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                type(type: org.spongepowered.api.data.type.DoublePlantType, weight: number /*double*/): org.spongepowered.api.world.gen.populator.DoublePlant.Builder
                                /**
                                 * Sets the number of plants to create, cannot be negative.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of plants which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 * @param count The new base amount
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.DoublePlant.Builder
                                /**
                                 * Sets the number of plants to create, cannot be negative.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of plants which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 * @param count The new base amount
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.DoublePlant.Builder
                                /**
                                 * Sets the overriding supplier. If the supplier is present then it is
                                 * used in place of the weighted table.
                                 * @param override The new supplier override, or null
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                supplier(override: java.util.function.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.DoublePlantType> | java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.DoublePlantType>): org.spongepowered.api.world.gen.populator.DoublePlant.Builder
                                /**
                                 * Builds a new instance of a {@link DoublePlant} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.DoublePlant
                            }
                        }
                    }
                }
            }
        }
    }
}
