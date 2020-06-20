declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * An {@link DataManipulator} handling the representation of an
                         * {@link ItemStack}. The {@link ItemStack} may be "displayed" or simply
                         * used as a "model" for various reasons. Usually applies to
                         * {@link ItemFrame}s.
                         */
                        // @ts-ignore
                        interface RepresentedItemData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.RepresentedItemData, org.spongepowered.api.data.manipulator.immutable.ImmutableRepresentedItemData> {
                            /**
                             * Gets the {@link Value} for the represented {@link ItemStack} as
                             * an {@link ItemStackSnapshot}.
                             * @return The value for the item stack snapshot
                             * @see Keys#REPRESENTED_ITEM
                             */
                            // @ts-ignore
                            item(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        }
                    }
                }
            }
        }
    }
}
