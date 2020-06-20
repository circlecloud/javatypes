declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * Represents an editable collection of {@link BlockType}s that can
                             * be broken with this item. This data usually refers to blocks that can be
                             * broken only when a human is in adventure mode.
                             * <p>Normally, when players are in survival gamemode, they can edit blocks
                             * without needing to know the item is able to break said block. However, when
                             * the player is in a gamemode like adventure, they loose the ability to edit
                             * blocks unless the item has this type of {@link BreakableData} to note
                             * which {@link BlockType}s can be broken with that item.</p>
                             */
                            // @ts-ignore
                            interface BreakableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.item.BreakableData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableBreakableData> {
                                /**
                                 * Gets the {@link SetValue} for all known {@link BlockType}s that
                                 * can be broken by the owning {@link ItemStack}.
                                 * @return The immutable set of block types that can be broken by the item
                                 *      stack
                                 * @see Keys#BREAKABLE_BLOCK_TYPES
                                 */
                                // @ts-ignore
                                breakable(): org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.block.BlockType>
                            }
                        }
                    }
                }
            }
        }
    }
}
