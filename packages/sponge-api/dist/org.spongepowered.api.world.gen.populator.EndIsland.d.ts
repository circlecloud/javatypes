declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace gen {
                    namespace populator {
                        /**
                         * Represents a populator which will generate small 'islands' which float in the
                         * end.
                         * <p> The island is formed as a cone with each layer being a circle of blocks
                         * with a gradually decreasing radius. </p>
                         */
                        // @ts-ignore
                        interface EndIsland extends org.spongepowered.api.world.gen.Populator {
                            /**
                             * Creates a new {@link Builder} to build a {@link EndIsland} populator.
                             * @return The new builder
                             */
                            // @ts-ignore
                            builder(): org.spongepowered.api.world.gen.populator.EndIsland.Builder
                            /**
                             * Gets the initial starting radius range of the island.
                             * @return The initial starting radius
                             */
                            // @ts-ignore
                            getStartingRadius(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the initial starting radius range of the island.
                             * @param radius The new initial starting radius range
                             */
                            // @ts-ignore
                            setStartingRadius(radius: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the initial starting radius of the island.
                             * @param radius The new initial starting radius
                             */
                            // @ts-ignore
                            setStartingRadius(radius: number /*double*/): void
                            /**
                             * Gets the amount that the radius decreases for every downward step.
                             * @return The radius decrement
                             */
                            // @ts-ignore
                            getRadiusDecrement(): org.spongepowered.api.util.weighted.VariableAmount
                            /**
                             * Sets the amount that the radius decreases for every downward step.
                             * @param decrement The new radius decrement range
                             */
                            // @ts-ignore
                            setRadiusDecrement(decrement: org.spongepowered.api.util.weighted.VariableAmount): void
                            /**
                             * Sets the amount that the radius decreases for every downward step.
                             * @param decrement The new radius decrement
                             */
                            // @ts-ignore
                            setRadiusDecrement(decrement: number /*double*/): void
                            /**
                             * Gets the block state that the island will be formed from.
                             * @return The island block state
                             */
                            // @ts-ignore
                            getIslandBlock(): org.spongepowered.api.block.BlockState
                            /**
                             * Sets the block state that the island will be formed from.
                             * @param state The new island block state
                             */
                            // @ts-ignore
                            setIslandBlock(state: org.spongepowered.api.block.BlockState): void
                            /**
                             * Gets the radius around the center (0, 0) of the world that this populator
                             * will not apply to.
                             * <p>This is used to prevent the islands from generating around the ender
                             * dragon fight area.</p>
                             * @return The radius
                             */
                            // @ts-ignore
                            getExclusionRadius(): int
                            /**
                             * Sets the radius around the center (0, 0) of the world that this populator
                             * will not apply to.
                             * <p>This must be a positive value or zero.</p>
                             * @param radius The exclusion radius
                             */
                            // @ts-ignore
                            setExclusionRadius(radius: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
