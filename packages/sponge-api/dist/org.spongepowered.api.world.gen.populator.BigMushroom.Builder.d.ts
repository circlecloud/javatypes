declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace BigMushroom {
                            /**
                             * A builder for constructing {@link BigMushroom} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.BigMushroom, org.spongepowered.api.world.gen.populator.BigMushroom.Builder> {
                                /**
                                 * Sets the weighted {@link PopulatorObject}s to select from during
                                 * generation.
                                 * @param types The weighted types
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                types(types: org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.world.gen.PopulatorObject>): org.spongepowered.api.world.gen.populator.BigMushroom.Builder
                                /**
                                 * Adds the weighted {@link PopulatorObject} to the list of available
                                 * types.
                                 * @param type The new weighted type
                                 * @param weight The weight of the new type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                type(type: org.spongepowered.api.world.gen.PopulatorObject, weight: number /*double*/): org.spongepowered.api.world.gen.populator.BigMushroom.Builder
                                /**
                                 * Sets the number of mushrooms which will be attempted to be spawned.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of mushrooms which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 * @param count The new amount to attempt to create
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                mushroomsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.BigMushroom.Builder
                                /**
                                 * Sets the number of mushrooms which will be attempted to be spawned.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of mushrooms which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 * @param count The new amount to attempt to create
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                mushroomsPerChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.BigMushroom.Builder
                                /**
                                 * Sets the overriding supplier. If the supplier is present then it is
                                 * used in place of the weighted table.
                                 * @param override The new supplier override, or null
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                supplier(override: java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.world.gen.PopulatorObject>): org.spongepowered.api.world.gen.populator.BigMushroom.Builder
                                /**
                                 * Builds a new instance of a {@link BigMushroom} populator with the
                                 * settings set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.BigMushroom
                            }
                        }
                    }
                }
            }
        }
    }
}
