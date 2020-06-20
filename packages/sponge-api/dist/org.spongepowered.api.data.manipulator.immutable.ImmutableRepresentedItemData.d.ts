declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} handling the representation of an
                         * {@link ItemStack}. The {@link ItemStack} may be "displayed" or simply
                         * used as a "model" for various reasons. Usually applies to
                         * {@link ItemFrame}s.
                         */
                        // @ts-ignore
                        interface ImmutableRepresentedItemData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.ImmutableRepresentedItemData, org.spongepowered.api.data.manipulator.mutable.RepresentedItemData> {
                            /**
                             * Gets the {@link ImmutableValue} for the represented {@link ItemStack}
                             * as an {@link ItemStackSnapshot}.
                             * @return The immutable value for the item stack snapshot
                             */
                            // @ts-ignore
                            item(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        }
                    }
                }
            }
        }
    }
}
