declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * An {@link DataManipulator} handling the "lore" that is displayed
                             * on a tooltip for an {@link ItemStack}. The lore can be any form of
                             * {@link Text} and is not restricted to one formatting.
                             */
                            // @ts-ignore
                            interface LoreData extends org.spongepowered.api.data.manipulator.mutable.ListData<org.spongepowered.api.text.Text, org.spongepowered.api.data.manipulator.mutable.item.LoreData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableLoreData> {
                                /**
                                 * Gets the {@link ListValue} of the "lore" {@link Text}.
                                 * @return The list value of text lore
                                 * @see Keys#ITEM_LORE
                                 */
                                // @ts-ignore
                                lore(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.text.Text>
                            }
                        }
                    }
                }
            }
        }
    }
}
