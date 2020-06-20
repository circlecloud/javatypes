declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * An {@link DataManipulator} handling the {@link BlockState}
                             * information for an {@link ItemStack} that is representing a
                             * {@link BlockType}. Since the {@link BlockState} itself stores information
                             * related to the actual block information, not all information can be
                             * retrieved through the {@link ItemStack} itself.
                             * <p>Note that some block states have properties that are only defined by the
                             * position the item block is placed. Some blocks may read some properties, and
                             * others may not read all properties. {@link BlockState}s are not representing
                             * complex data like inventories, if complex information is required, use a
                             * different {@link DataManipulator} type.</p>
                             */
                            // @ts-ignore
                            interface BlockItemData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.item.BlockItemData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableBlockItemData> {
                                /**
                                 * Gets the {@link Value} for the currently represented
                                 * {@link BlockState}.
                                 * @return The value for the currently represented block state
                                 * @see Keys#ITEM_BLOCKSTATE
                                 */
                                // @ts-ignore
                                state(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.block.BlockState>
                            }
                        }
                    }
                }
            }
        }
    }
}
