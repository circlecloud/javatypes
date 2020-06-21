declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * A populator which will place several trees into a chunk in order to create a
                         * forest.
                         */
                        // @ts-ignore
                        interface Forest extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Forest} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Forest.Builder
                            /**
                             * Gets the number of trees to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getTreesPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of trees to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setTreesPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of trees to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setTreesPerChunk(count: number /*int*/): void
                            /**
                             * Gets the a mutable weighted collection of {@link PopulatorObject}s to
                             * spawn.
                             * @return The type to spawn
                             */
                            // @ts-ignore
                            getTypes(): org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.world.gen.PopulatorObject>
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * PopulatorObject to place.
                             * @return The supplier override
                             */
                            // @ts-ignore
                            getSupplierOverride(): java.util.Optional<java.util.function$$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.world.gen.PopulatorObject>>
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what PopulatorObject to
                             * place.
                             * @param override The new supplier override, or null
                             */
                            // @ts-ignore
                            setSupplierOverride(override: java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.world.gen.PopulatorObject>): void
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
