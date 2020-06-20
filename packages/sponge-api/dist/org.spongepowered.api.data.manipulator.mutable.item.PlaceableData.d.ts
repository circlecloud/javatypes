declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * A {@link DataManipulator} handling the {@link Set} of
                             * {@link BlockType}s that the owning {@link ItemStack} may be placed on.
                             * If an item can be placed as a block, such as {@link BlockItemData},
                             * this item data, if added to the item, can prevent placement of the item
                             * excluding the {@link BlockType}s from this data.
                             */
                            // @ts-ignore
                            interface PlaceableData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.item.PlaceableData, org.spongepowered.api.data.manipulator.immutable.item.ImmutablePlaceableData> {
                                /**
                                 * Gets the {@link SetValue} of {@link BlockType}s the
                                 * {@link ItemType} can be placed on.
                                 * @return The immutable set value of block types the item can be placed on
                                 * @see Keys#PLACEABLE_BLOCKS
                                 */
                                // @ts-ignore
                                placeable(): org.spongepowered.api.data.value.mutable.SetValue<org.spongepowered.api.block.BlockType>
                            }
                        }
                    }
                }
            }
        }
    }
}
