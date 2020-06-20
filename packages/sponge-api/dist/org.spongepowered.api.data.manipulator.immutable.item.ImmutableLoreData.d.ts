declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} handling the "lore" that is displayed
                             * on a tooltip for an {@link ItemStack}. The lore can be any form of
                             * {@link Text} and is not restricted to one formatting.
                             */
                            // @ts-ignore
                            interface ImmutableLoreData extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<org.spongepowered.api.text.Text, org.spongepowered.api.data.manipulator.immutable.item.ImmutableLoreData, org.spongepowered.api.data.manipulator.mutable.item.LoreData> {
                                /**
                                 * Gets the {@link ImmutableListValue} of the "lore" {@link Text}.
                                 * @return The immutable list value of text lore
                                 */
                                // @ts-ignore
                                lore(): org.spongepowered.api.data.value.immutable.ImmutableListValue<org.spongepowered.api.text.Text>
                            }
                        }
                    }
                }
            }
        }
    }
}
