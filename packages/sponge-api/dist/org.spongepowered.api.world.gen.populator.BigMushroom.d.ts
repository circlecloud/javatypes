declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which places a number of mushrooms. The type of
                         * mushroom to place can be set or can be randomized.
                         */
                        // @ts-ignore
                        interface BigMushroom extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link BigMushroom} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.BigMushroom.Builder
                            /**
                             * Gets a mutable {@link WeightedTable} of possible mushroom types to spawn.
                             * @return The weighted list
                             */
                            // @ts-ignore
                            getTypes(): org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.world.gen.PopulatorObject>
                            /**
                             * Gets a representation of the amount of mushrooms which will be attempted
                             * to be spawned per chunk.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of mushrooms which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             * @return The number of mushrooms attempted to be spawned per chunk
                             */
                            // @ts-ignore
                            getMushroomsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the representation of the amount of mushrooms which will be
                             * attempted to be spawned per chunk.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of mushrooms which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             * @param count The new amount to attempt to create
                             */
                            // @ts-ignore
                            setMushroomsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the amount of mushrooms which will be attempted to be spawned per
                             * chunk.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of mushrooms which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             * @param count The new amount to attempt to create
                             */
                            // @ts-ignore
                            setMushroomsPerChunk(count: number /*int*/): void
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * PopulatorObject to place.
                             * @return The supplier override
                             */
                            // @ts-ignore
                            getSupplierOverride(): java.util.Optional<java.util.function.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.world.gen.PopulatorObject>>
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what PopulatorObject to
                             * place.
                             * @param override The new supplier override, or null
                             */
                            // @ts-ignore
                            setSupplierOverride(override: java.util.function.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.world.gen.PopulatorObject> | java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.world.gen.PopulatorObject>): void
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
