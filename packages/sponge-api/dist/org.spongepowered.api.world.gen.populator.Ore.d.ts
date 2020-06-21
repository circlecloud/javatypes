declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which seeds the underground areas of the chunks with
                         * ores.
                         */
                        // @ts-ignore
                        interface Ore extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link Ore} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.Ore.Builder
                            /**
                             * Gets the block to place as ore.
                             * @return The ore block
                             */
                            // @ts-ignore
                            getOreBlock(): org.spongepowered.api.block.BlockState
                            /**
                             * Sets the block to place as ore.
                             * @param block The new ore block
                             */
                            // @ts-ignore
                            setOreBlock(block: org.spongepowered.api.block.BlockState): void
                            /**
                             * Gets the size of deposit of ore. This is the number of blocks per clump
                             * of ores spawned.
                             * @return The deposit size
                             */
                            // @ts-ignore
                            getDepositSize(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the size of deposit of ore. This is the number of blocks per clump
                             * of ores spawned.
                             * @param size The new deposit size
                             */
                            // @ts-ignore
                            setDepositSize(size: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the size of deposit of ore. This is the number of blocks per clump
                             * of ores spawned.
                             * @param size The new deposit size
                             */
                            // @ts-ignore
                            setDepositSize(size: number /*int*/): void
                            /**
                             * Gets the number of ore clumps to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @return The number of clumps to spawn
                             */
                            // @ts-ignore
                            getDepositsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of ore clumps to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @param count The new number of clumps to spawn
                             */
                            // @ts-ignore
                            setDepositsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of ore clumps to attempt to spawn per chunk, must be
                             * greater than zero.
                             * @param count The new number of clumps to spawn
                             */
                            // @ts-ignore
                            setDepositsPerChunk(count: number /*int*/): void
                            /**
                             * Gets the height that the ore will generate at.
                             * @return The height
                             */
                            // @ts-ignore
                            getHeight(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the height that the ore will generate at.
                             * @param height The new height
                             */
                            // @ts-ignore
                            setHeight(height: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Gets a predicate which checks for the placement conditions for this ore.
                             * @return The placement conditions check
                             */
                            // @ts-ignore
                            getPlacementCondition(): java.util.function$.Predicate<org.spongepowered.api.block.BlockState>
                            /**
                             * Sets a predicate which checks for the placement conditions for this ore.
                             * @param condition The new placement conditions check
                             */
                            // @ts-ignore
                            setPlacementCondition(condition: java.util.function$.Predicate<org.spongepowered.api.block.BlockState>): void
                        }
                    }
                }
            }
        }
    }
}
