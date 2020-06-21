declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which spawns patches of pumpkins randomly within
                         * chunks.
                         */
                        // @ts-ignore
                        interface Pumpkin extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Pumpkin} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Pumpkin.Builder
                            /**
                             * Gets the number of pumpkins to attempt to spawn per patch, must be
                             * greater than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getPumpkinsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of pumpkins to attempt to spawn per patch, must be
                             * greater than zero.
                             * @param count The new number to spawn
                             */
                            // @ts-ignore
                            setPumpkinsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of pumpkins to attempt to spawn per patch, must be
                             * greater than zero.
                             * @param count The new number to spawn
                             */
                            // @ts-ignore
                            setPumpkinsPerChunk(count: number /*int*/): void
                            /**
                             * Gets the probability of a pumpkin patch spawning within a chunk.
                             * @return The probability of a patch spawning
                             */
                            // @ts-ignore
                            getPumpkinChance(): number /*double*/
                            /**
                             * Sets the probability of a pumpkin patch spawning within a chunk.
                             * @param p The new probability of a patch spawning
                             */
                            // @ts-ignore
                            setPumpkinChance(p: number /*double*/): void
                        }
                    }
                }
            }
        }
    }
}
