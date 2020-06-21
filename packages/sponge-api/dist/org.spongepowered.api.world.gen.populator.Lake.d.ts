declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which will attempt to spawn lakes within the chunk
                         * depending on a random chance.
                         */
                        // @ts-ignore
                        interface Lake extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Lake} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Lake.Builder
                            /**
                             * Gets the {@link BlockState} of the liquid to fill the lake with.
                             * @return The lake block state
                             */
                            // @ts-ignore
                            getLiquidType(): org.spongepowered.api.block.BlockState
                            /**
                             * Sets the {@link BlockState} of the liquid to fill the lake with.
                             * @param liquid The new lake block state
                             */
                            // @ts-ignore
                            setLiquidType(liquid: org.spongepowered.api.block.BlockState): void
                            /**
                             * Gets the probability of a lake spawning in a chunk.
                             * @return The lake spawn probability
                             */
                            // @ts-ignore
                            getLakeProbability(): number /*double*/
                            /**
                             * Sets the probability of a lake spawning in a chunk.
                             * @param p The new lake spawn probability
                             */
                            // @ts-ignore
                            setLakeProbability(p: number /*double*/): void
                            /**
                             * Gets the height that this lake will be spawned at.
                             * @return The height
                             */
                            // @ts-ignore
                            getHeight(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the height that this lake will be spawned at.
                             * @param height The new height
                             */
                            // @ts-ignore
                            setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void
                        }
                    }
                }
            }
        }
    }
}
