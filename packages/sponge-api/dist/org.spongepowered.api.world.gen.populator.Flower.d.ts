declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which scatters flowers randomly around a chunk.
                         */
                        // @ts-ignore
                        interface Flower extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Flower} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Flower.Builder
                            /**
                             * Gets the number of flowers to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getFlowersPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of flowers to attempt to spawn per chunk, must be greater
                             * than zero.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of flowers which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setFlowersPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of flowers to attempt to spawn per chunk, must be greater
                             * than zero.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of flowers which are successfully spawned by the populator
                             * will almost always be lower.</p>
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setFlowersPerChunk(count: number /*int*/): void
                            /**
                             * Gets a mutable weighted collection of plant type for this populator to
                             * spawn.
                             * @return The plant types
                             */
                            // @ts-ignore
                            getFlowerTypes(): org.spongepowered.api.util.weighted.WeightedTable<org.spongepowered.api.data.type.PlantType>
                            /**
                             * Gets the overriding supplier if it exists. If the supplier is present
                             * then it is used in place of the weighted table while determining what
                             * PlantType to place.
                             * @return The supplier override
                             */
                            // @ts-ignore
                            getSupplierOverride(): java.util.Optional<java.util.function.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.PlantType>>
                            /**
                             * Sets the overriding supplier. If the supplier is present then it is used
                             * in place of the weighted table while determining what PlantType to place.
                             * @param override The new supplier override, or null
                             */
                            // @ts-ignore
                            setSupplierOverride(override: java.util.function.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.PlantType> | java.util.function$.Function<org.spongepowered.api.world.Location<org.spongepowered.api.world.extent.Extent>, org.spongepowered.api.data.type.PlantType>): void
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
