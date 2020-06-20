declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace biome {
                    /**
                     * Represents a layer of BlockStates specific to a biome which may be placed in
                     * during generation.
                     */
                    // @ts-ignore
                    class GroundCoverLayer extends java.lang.Object {
                        /**
                         * Creates a new {@link GroundCoverLayer}.
                         * @param block The block state to place down for the layer
                         * @param depth The depth of the layer
                         */
                        // @ts-ignore
                        constructor(block: org.spongepowered.api.block.BlockState, depth: org.spongepowered.api.util.weighted.SeededVariableAmount<java.lang.Double>)
                        /**
                         * Creates a new {@link GroundCoverLayer}.
                         * @param block The function which is used to determine the blockstate to
                         *         place at this layer
                         * @param depth The depth of the layer
                         */
                        // @ts-ignore
                        constructor(block: java.util.function.Function<java.lang.Double, org.spongepowered.api.block.BlockState> | java.util.function$.Function<java.lang.Double, org.spongepowered.api.block.BlockState>, depth: org.spongepowered.api.util.weighted.SeededVariableAmount<java.lang.Double>)
                        /**
                         * Gets the {@link BlockState} for this layer.
                         * @return The block state
                         */
                        // @ts-ignore
                        getBlockState(): java.util.function.Function<java.lang.Double, org.spongepowered.api.block.BlockState>
                        /**
                         * Sets the function which is used to determine the blockstate to place at
                         * this layer. The input to the function is a noise value.
                         * @param block The block state function
                         */
                        // @ts-ignore
                        setBlockState(block: java.util.function.Function<java.lang.Double, org.spongepowered.api.block.BlockState> | java.util.function$.Function<java.lang.Double, org.spongepowered.api.block.BlockState>): void
                        /**
                         * Sets the {@link BlockState} for this layer.
                         * @param block The block state
                         */
                        // @ts-ignore
                        setBlockState(block: org.spongepowered.api.block.BlockState): void
                        /**
                         * Gets a representation of the depth of this layer. The variable amount
                         * will be seeded with the stone noise at generation time.
                         * @return The depth
                         */
                        // @ts-ignore
                        getDepth(): org.spongepowered.api.util.weighted.SeededVariableAmount<java.lang.Double>
                        /**
                         * Gets a representation of the depth of this layer. The variable amount
                         * will be seeded with the stone noise at generation time. This depth may
                         * vary based on the Y position.
                         * @param topYCoordinate The Y coordinate of the first block that this
                         *  layer will apply to.
                         * @return The depth
                         */
                        // @ts-ignore
                        getDepth(topYCoordinate: number /*int*/): org.spongepowered.api.util.weighted.SeededVariableAmount<java.lang.Double>
                        /**
                         * Sets the {@link SeededVariableAmount} representing the depth of this
                         * layer. The variable amount will be seeded with the stone noise at
                         * generation time.
                         * @param depth The new variable amount
                         */
                        // @ts-ignore
                        setDepth(depth: org.spongepowered.api.util.weighted.SeededVariableAmount<java.lang.Double>): void
                        /**
                         * Sets the {@link VariableAmount} representing the depth of this layer.
                         * @param depth The new variable amount
                         */
                        // @ts-ignore
                        setDepth(depth: org.spongepowered.api.util.weighted.VariableAmount): void
                        /**
                         * Sets the depth of this layer to the given constant value.
                         * @param depth The new depth
                         */
                        // @ts-ignore
                        setDepth(depth: number /*double*/): void
                        // @ts-ignore
                        toString(): java.lang.String
                        // @ts-ignore
                        equals(obj: any): boolean
                        // @ts-ignore
                        hashCode(): int
                    }
                }
            }
        }
    }
}
