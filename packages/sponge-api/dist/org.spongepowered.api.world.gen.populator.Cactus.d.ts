declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which will randomly spawn a number of cacti within the
                         * chunk. The cacti will only be spawned at valid locations, that is on top of a
                         * sand block with no immediately surrounding blocks.
                         */
                        // @ts-ignore
                        interface Cactus extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Cactus} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Cactus.Builder
                            /**
                             * Gets the number of cacti to spawn per chunk.
                             * @return The number of cacti to spawn
                             */
                            // @ts-ignore
                            getCactiPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of cacti to spawn per chunk, cannot be negative.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of cacti which are successfully spawned by the populator will
                             * almost always be lower.</p>
                             * @param count The new number of cacti to spawn
                             */
                            // @ts-ignore
                            setCactiPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of cacti to spawn per chunk, cannot be negative.
                             * <p><strong>Note:</strong> This number is not a definite number and the
                             * final count of cacti which are successfully spawned by the populator will
                             * almost always be lower.</p>
                             * @param count The new number of cacti to spawn
                             */
                            // @ts-ignore
                            setCactiPerChunk(count: number /*int*/): void
                            /**
                             * Gets the height of the cacti.
                             * @return The height
                             */
                            // @ts-ignore
                            getHeight(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the height of the cacti.
                             * @param height The new height
                             */
                            // @ts-ignore
                            setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the height of the cacti.
                             * @param count The new height
                             */
                            // @ts-ignore
                            setHeight(count: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
