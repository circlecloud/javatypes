declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * Represents a falling block. A falling block may harm entities where it lands,
                 * and optionally may place a block, or drop an item.
                 */
                // @ts-ignore
                interface FallingBlock extends org.spongepowered.api.entity.Entity {
                    /**
                     * Gets a copy of the currently used {@link FallingBlockData}.
                     * @return A copy of the currently used falling block data
                     */
                    // @ts-ignore
                    getFallingBlockData(): org.spongepowered.api.data.manipulator.mutable.entity.FallingBlockData
                    /**
                     * Gets the {@link Value} for the damage to deal per block the
                     * {@link FallingBlock} has fallen.
                     * @return The immutable value for the damage per block of falling
                     */
                    // @ts-ignore
                    fallDamagePerBlock(): org.spongepowered.api.data.value.mutable.Value<java.lang.Double>
                    /**
                     * Gets the maximum damage the {@link FallingBlock} can deal to another
                     * entity for falling on the entity.
                     * @return The maximum damage the block can deal
                     */
                    // @ts-ignore
                    maxFallDamage(): org.spongepowered.api.data.value.mutable.Value<java.lang.Double>
                    /**
                     * Gets the {@link BlockState} the falling block is representing.
                     * @return The falling block's block state
                     */
                    // @ts-ignore
                    blockState(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.block.BlockState>
                    /**
                     * Gets whether this falling block will try to place itself where it lands.
                     * @return True if this block will attempt to place itself when it lands
                     */
                    // @ts-ignore
                    canPlaceAsBlock(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                    /**
                     * Gets whether this falling block can drop as an item if it lands in a way
                     * that it can not be placed.
                     * @return Whether this falling block can drop as an item
                     */
                    // @ts-ignore
                    canDropAsItem(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                    /**
                     * Gets the time the block has been falling. Defaults to a value of 1.
                     * @return The time the block has been falling
                     */
                    // @ts-ignore
                    fallTime(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>
                    /**
                     * Gets whether this falling block will damage entities where it lands.
                     * @return Whether this falling block will damage entities where it lands
                     */
                    // @ts-ignore
                    canHurtEntities(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                }
            }
        }
    }
}
