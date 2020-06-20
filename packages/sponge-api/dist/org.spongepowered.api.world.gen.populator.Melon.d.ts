declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which scatters melons randomly around the chunk.
                         */
                        // @ts-ignore
                        interface Melon extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Melon} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Melon.Builder
                            /**
                             * Gets the number of melons to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getMelonsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of melons to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setMelonsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of melons to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setMelonsPerChunk(count: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
