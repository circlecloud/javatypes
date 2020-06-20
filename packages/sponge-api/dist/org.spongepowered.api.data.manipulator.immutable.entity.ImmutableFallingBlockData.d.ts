declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for a {@link FallingBlock} with all
                             * relative information associated, such as the {@link BlockState}, the
                             * {@link #fallDamagePerBlock()}, etc.
                             */
                            // @ts-ignore
                            interface ImmutableFallingBlockData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFallingBlockData, org.spongepowered.api.data.manipulator.mutable.entity.FallingBlockData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the damage to deal per block
                                 * the {@link FallingBlock} has fallen.
                                 * @return The immutable value for the damage per block of falling
                                 */
                                // @ts-ignore
                                fallDamagePerBlock(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Double>
                                /**
                                 * Gets the maximum damage the {@link FallingBlock} can deal to another
                                 * entity for falling on the entity.
                                 * @return The maximum damage the block can deal
                                 */
                                // @ts-ignore
                                maxFallDamage(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Double>
                                /**
                                 * Gets the {@link BlockState} the falling block is representing.
                                 * @return The falling block's block state
                                 */
                                // @ts-ignore
                                blockState(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.block.BlockState>
                                /**
                                 * Gets whether this falling block will try to place itself where
                                 * it lands.
                                 * @return True if this block will attempt to place itself when it lands
                                 */
                                // @ts-ignore
                                canPlaceAsBlock(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets whether this falling block can drop as an item if it lands in a
                                 * way that it can not be placed.
                                 * @return Whether this falling block can drop as an item
                                 */
                                // @ts-ignore
                                canDropAsItem(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                                /**
                                 * Gets the time the block has been falling if spawning a entity in air
                                 * this will need to be set to 1 or it will be instantly removed.
                                 * @return The time the block has been falling
                                 */
                                // @ts-ignore
                                fallTime(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Integer>
                                /**
                                 * Gets whether this falling block will damage entities where it lands.
                                 * @return Whether this falling block will damage entities where it lands
                                 */
                                // @ts-ignore
                                canHurtEntities(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
