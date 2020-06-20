declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which places in water lilies.
                         */
                        // @ts-ignore
                        interface WaterLily extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link WaterLily} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.WaterLily.Builder
                            /**
                             * Gets the number of water lilies to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @return The amount to spawn
                             */
                            // @ts-ignore
                            getWaterLilyPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of water lilies to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setWaterLilyPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of water lilies to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setWaterLilyPerChunk(count: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
