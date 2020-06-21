declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which creates random distributions of singular blocks,
                         * such as fire in the nether and water in the walls of caves.
                         */
                        // @ts-ignore
                        interface RandomBlock extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link RandomBlock} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.RandomBlock.Builder
                            /**
                             * Gets the {@link BlockState} that this populator will randomly distribute.
                             * @return The block state
                             */
                            // @ts-ignore
                            getBlock(): org.spongepowered.api.block.BlockState
                            /**
                             * Sets the {@link BlockState} that this populator will randomly distribute.
                             * @param block The new block state
                             */
                            // @ts-ignore
                            setBlock(block: org.spongepowered.api.block.BlockState): void
                            /**
                             * Gets the number of blocks to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @return The number to spawn
                             */
                            // @ts-ignore
                            getAttemptsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of blocks to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new number to spawn
                             */
                            // @ts-ignore
                            setAttemptsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of blocks to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new number to spawn
                             */
                            // @ts-ignore
                            setAttemptsPerChunk(count: number /*int*/): void
                            /**
                             * Gets the height that the block will be randomly placed within.
                             * @return The height range
                             */
                            // @ts-ignore
                            getHeightRange(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the height that the blocks will be randomly placed within.
                             * @param height The new height range
                             */
                            // @ts-ignore
                            setHeightRange(height: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Gets the {@link Predicate} that this populator used to determine of a
                             * given {@link Location} is valid to attempt to place a block at.
                             * @return The targeted block predicate
                             */
                            // @ts-ignore
                            getPlacementTarget(): java.util.function$.Predicate<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                            /**
                             * Sets the {@link Predicate} that this populator used to determine of a
                             * given {@link Location} is valid to attempt to place a block at.
                             * @param target The new targeted block predicate
                             */
                            // @ts-ignore
                            getPlacementTarget(target: java.util.function$.Predicate<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>): void
                        }
                    }
                }
            }
        }
    }
}
