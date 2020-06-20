declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents the information for a {@link FallingBlock}.
                             */
                            // @ts-ignore
                            interface FallingBlockData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.FallingBlockData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFallingBlockData> {
                                /**
                                 * Gets the {@link Value} for the damage to deal per block
                                 * the {@link FallingBlock} has fallen.
                                 * @return The immutable value for the damage per block of falling
                                 * @see Keys#FALL_DAMAGE_PER_BLOCK
                                 */
                                // @ts-ignore
                                fallDamagePerBlock(): org.spongepowered.api.data.value.mutable.Value<java.lang.Double>
                                /**
                                 * Gets the maximum damage the {@link FallingBlock} can deal to another
                                 * entity for falling on the entity.
                                 * @return The maximum damage the block can deal
                                 * @see Keys#MAX_FALL_DAMAGE
                                 */
                                // @ts-ignore
                                maxFallDamage(): org.spongepowered.api.data.value.mutable.Value<java.lang.Double>
                                /**
                                 * Gets the {@link BlockState} the falling block is representing.
                                 * @return The falling block's block state
                                 * @see Keys#FALLING_BLOCK_STATE
                                 */
                                // @ts-ignore
                                blockState(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.block.BlockState>
                                /**
                                 * Gets whether this falling block will try to place itself where
                                 * it lands.
                                 * @return True if this block will attempt to place itself when it lands
                                 * @see Keys#CAN_PLACE_AS_BLOCK
                                 */
                                // @ts-ignore
                                canPlaceAsBlock(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets whether this falling block can drop as an item if it lands in a
                                 * way that it can not be placed.
                                 * @return Whether this falling block can drop as an item
                                 * @see Keys#CAN_DROP_AS_ITEM
                                 */
                                // @ts-ignore
                                canDropAsItem(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                /**
                                 * Gets the number of ticks the block has been falling for.
                                 * @return The time the block has been falling
                                 * @see Keys#FALL_TIME
                                 */
                                // @ts-ignore
                                fallTime(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>
                                /**
                                 * Gets whether this falling block will damage entities where it lands.
                                 * @return Whether this falling block will damage entities where it lands
                                 * @see Keys#FALLING_BLOCK_CAN_HURT_ENTITIES
                                 */
                                // @ts-ignore
                                canHurtEntities(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
