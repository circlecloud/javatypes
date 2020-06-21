declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        namespace Flower {
                            /**
                             * A builder for constructing {@link Flower} populators.
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.world.gen.populator.Flower, org.spongepowered.api.world.gen.populator.Flower.Builder> {
                                /**
                                 * Sets the number of flowers to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of flowers which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: org.spongepowered.api.util.weighted.VariableAmount): org.spongepowered.api.world.gen.populator.Flower.Builder
                                /**
                                 * Sets the number of flowers to attempt to spawn per chunk, must be
                                 * greater than zero.
                                 * <p><strong>Note:</strong> This number is not a definite number and
                                 * the final count of flowers which are successfully spawned by the
                                 * populator will almost always be lower.</p>
                                 * @param count The new amount to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                perChunk(count: number /*int*/): org.spongepowered.api.world.gen.populator.Flower.Builder
                                /**
                                 * Sets the plant types for this populator to spawn.
                                 * @param types The plant types to spawn
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                types(types: org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.data.type.PlantType>): org.spongepowered.api.world.gen.populator.Flower.Builder
                                /**
                                 * Adds the plant type to the list of types to spawn with the given
                                 * weight.
                                 * @param type The plant type to spawn
                                 * @param weight The weight of the type
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                type(type: org.spongepowered.api.data.type.PlantType, weight: number /*double*/): org.spongepowered.api.world.gen.populator.Flower.Builder
                                /**
                                 * Sets the overriding supplier. If the supplier is present then it is
                                 * used in place of the weighted table.
                                 * @param override The new supplier override, or null
                                 * @return This builder, for chaining
                                 */
                                // @ts-ignore
                                supplier(override: java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.PlantType>): org.spongepowered.api.world.gen.populator.Flower.Builder
                                /**
                                 * Builds a new instance of a {@link Flower} populator with the settings
                                 * set within the builder.
                                 * @return A new instance of the populator
                                 * @throws IllegalStateException If there are any settings left unset
                                 *          which do not have default values
                                 */
                                // @ts-ignore
                                build(): org.spongepowered.api.world.gen.populator.Flower
                            }
                        }
                    }
                }
            }
        }
    }
}
