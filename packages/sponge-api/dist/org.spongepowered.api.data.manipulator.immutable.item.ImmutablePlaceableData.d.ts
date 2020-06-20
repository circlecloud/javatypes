declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} handling the {@link Set} of
                             * {@link BlockType}s that the owning {@link ItemStack} may be placed on.
                             * If an item can be placed as a block, such as {@link BlockItemData},
                             * this item data, if added to the item, can prevent placement of the item
                             * excluding the {@link BlockType}s from this data.
                             */
                            // @ts-ignore
                            interface ImmutablePlaceableData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.item.ImmutablePlaceableData, org.spongepowered.api.data.manipulator.mutable.item.PlaceableData> {
                                /**
                                 * Gets the {@link ImmutableSetValue} of {@link BlockType}s the
                                 * {@link ItemType} can be placed on.
                                 * @return The immutable set value of block types the item can be placed on
                                 */
                                // @ts-ignore
                                placeable(): org.spongepowered.api.data.value.immutable.ImmutableSetValue<org.spongepowered.api.block.BlockType>
                            }
                        }
                    }
                }
            }
        }
    }
}
