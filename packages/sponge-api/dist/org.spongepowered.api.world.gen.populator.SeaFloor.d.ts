declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which places down a disc of material onto the bottom
                         * on an ocean or river.
                         */
                        // @ts-ignore
                        interface SeaFloor extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link SeaFloor} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.SeaFloor.Builder
                            /**
                             * Gets the {@link BlockState} to place down.
                             * @return The block to place
                             */
                            // @ts-ignore
                            getBlock(): org.spongepowered.api.block.BlockState
                            /**
                             * Sets the {@link BlockState} to place down.
                             * @param block The new block to place
                             */
                            // @ts-ignore
                            setBlock(block: org.spongepowered.api.block.BlockState): void
                            /**
                             * Gets the number of discs to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @return The amount to spawn
                             */
                            // @ts-ignore
                            getDiscsPerChunk(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the number of discs to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setDiscsPerChunk(count: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the number of discs to attempt to spawn per chunk, must be greater
                             * than zero.
                             * @param count The new amount to spawn
                             */
                            // @ts-ignore
                            setDiscsPerChunk(count: number /*int*/): void
                            /**
                             * Gets the radius of the discs being spawned.
                             * @return The disc radius
                             */
                            // @ts-ignore
                            getRadius(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the radius of the discs being spawned.
                             * @param radius The new disc radius
                             */
                            // @ts-ignore
                            setRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the radius of the discs being spawned.
                             * @param radius The new disc radius
                             */
                            // @ts-ignore
                            setRadius(radius: number /*double*/): void
                            /**
                             * Gets the depth of the sea floor cover to generate.
                             * @return The depth
                             */
                            // @ts-ignore
                            getDepth(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the depth of the sea floor cover to generate.
                             * @param depth The new depth
                             */
                            // @ts-ignore
                            setDepth(depth: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the depth of the sea floor cover to generate.
                             * @param depth The new depth
                             */
                            // @ts-ignore
                            setDepth(depth: number /*int*/): void
                            /**
                             * Gets the predicate which is applied to determine what {@link BlockState}s
                             * this populator may replace.
                             * @return The replacement check
                             */
                            // @ts-ignore
                            getValidBlocksToReplace(): java.util.function$.Predicate<org.spongepowered.api.block.BlockState>
                            /**
                             * Sets the predicate which will be applied to all {@link BlockState}s that
                             * this populator attempts to replace in order to determine if they are
                             * valid.
                             * @param check The new replacement check
                             */
                            // @ts-ignore
                            setValidBlocksToReplace(check: java.util.function$.Predicate<org.spongepowered.api.block.BlockState>): void
                        }
                    }
                }
            }
        }
    }
}
