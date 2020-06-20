declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which places down dead bushes within the chunk.
                         */
                        // @ts-ignore
                        interface DeadBush extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link DeadBush} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.DeadBush.Builder
                            /**
                             * Gets the number of bushes to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @return The amount of shrubs to spawn
                             */
                            // @ts-ignore
                            getShrubsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of bushes to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount of shrubs to spawn
                             */
                            // @ts-ignore
                            setShrubsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of bushes to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount of shrubs to spawn
                             */
                            // @ts-ignore
                            setShrubsPerChunk(count: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
