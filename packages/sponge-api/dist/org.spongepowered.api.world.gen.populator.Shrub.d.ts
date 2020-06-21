declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which places down various variants of
                         * {@link ShrubType}s within the chunk.
                         */
                        // @ts-ignore
                        interface Shrub extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Shrub} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Shrub.Builder
                            /**
                             * Gets a weighted collection of {@link ShrubType}s to place.
                             * @return The shrub types
                             */
                            // @ts-ignore
                            getTypes(): org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.data.type.ShrubType>
                            /**
                             * Gets the number of shrubs to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @return The amount of shrubs to spawn
                             */
                            // @ts-ignore
                            getShrubsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of shrubs to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount of shrubs to spawn
                             */
                            // @ts-ignore
                            setShrubsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of shrubs to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount of shrubs to spawn
                             */
                            // @ts-ignore
                            setShrubsPerChunk(count: number /*int*/): void
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * ShrubType to place.
                             * @return The supplier override
                             */
                            // @ts-ignore
                            getSupplierOverride(): java.util.Optional<java.util.function$$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.ShrubType>>
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what ShrubType to place.
                             * @param override The new supplier override, or null
                             */
                            // @ts-ignore
                            setSupplierOverride(override: java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.ShrubType>): void
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
