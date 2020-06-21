declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which spawns in an assortment of two block tall
                         * plants. The number of plants attempted to be generated is
                         * {@code final = base + [0,variance) }.
                         */
                        // @ts-ignore
                        interface DoublePlant extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link DoublePlant} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.DoublePlant.Builder
                            /**
                             * Gets a mutable weighted collection of possible plants which may be
                             * selected to be spawned in by this populator.
                             * @return The possible types to be spawned
                             */
                            // @ts-ignore
                            getPossibleTypes(): org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.data.type.DoublePlantType>
                            /**
                             * Gets the number of plants to create per chunk.
                             * @return The amount
                             */
                            // @ts-ignore
                            getPlantsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of plants to create per chunk, cannot be negative.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of plants which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             * @param count The new amount
                             */
                            // @ts-ignore
                            setPlantsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of plants to create per chunk, cannot be negative.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of plants which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             * @param count The new amount
                             */
                            // @ts-ignore
                            setPlantsPerChunk(count: number /*int*/): void
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * DoublePlantType to place.
                             * @return The supplier override
                             */
                            // @ts-ignore
                            getSupplierOverride(): java.util.Optional<java.util.function$$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.DoublePlantType>>
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what DoublePlantType to
                             * place.
                             * @param override The new supplier override, or null
                             */
                            // @ts-ignore
                            setSupplierOverride(override: java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.DoublePlantType>): void
                            /**
                             * Clears the supplier override to force the weighted table to be used
                             * instead.
                             */
                            // @ts-ignore
                            clearSupplierOverride(): void
                        }
                    }
                }
            }
        }
    }
}
