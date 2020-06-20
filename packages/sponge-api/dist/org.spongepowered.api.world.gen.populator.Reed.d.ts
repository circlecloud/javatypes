declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which spawns in reeds near valid water sources within
                         * the chunk.
                         */
                        // @ts-ignore
                        interface Reed extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Reed} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Reed.Builder
                            /**
                             * Gets the number of reeds to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @return The amount to spawn
                             */
                            // @ts-ignore
                            getReedsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of reeds to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setReedsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of reeds to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setReedsPerChunk(count: number /*int*/): void
                            /**
                             * Gets the height of the reeds to generate.
                             * @return The reed height
                             */
                            // @ts-ignore
                            getReedHeight(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the height of the reeds to generate.
                             * @param height The new reed height
                             */
                            // @ts-ignore
                            setReedHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void
                        }
                    }
                }
            }
        }
    }
}
