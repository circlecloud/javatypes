declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace item {
                            /**
                             * An {@link ImmutableDataManipulator} acting as the {@link Carrier} link to
                             * an {@link Inventory} that can be contained by an {@link ItemStack}.
                             * This can specifically apply to any {@link ItemStack}s that are of the type
                             * representing a {@link TileEntityCarrier}.
                             */
                            // @ts-ignore
                            interface ImmutableInventoryItemData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.item.ImmutableInventoryItemData, org.spongepowered.api.data.manipulator.mutable.item.InventoryItemData>, org.spongepowered.api.item.inventory.Carrier {
                            }
                        }
                    }
                }
            }
        }
    }
}
