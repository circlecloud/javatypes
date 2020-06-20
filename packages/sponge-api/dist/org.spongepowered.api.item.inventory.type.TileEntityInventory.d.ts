declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        /**
                         * An {@link Inventory} which is owned by a
                         * {@link TileEntity}. In Sponge, a TE is never seen as an Inventory itself and
                         * Tile Entities are instead considered to "own" their own Inventory (much like
                         * equipable entities do). Underlying implementations are of course completely
                         * at liberty to return the TE object directly but as far as consumers are
                         * concerned the TE instance and the inventory are separate things.
                         * <p>This is intended to provide a consistent way of dealing with inventories
                         * regardless of the "owner" of the inventory. Thus, any code capable of dealing
                         * with a {@link Carrier} is intrinsically able to deal with a TE inventory just
                         * as they would with any Entity inventory or any other type of Carrier for that
                         * matter.</p>
                         * <p>This separation of inventory logic from the TE itself also serves to
                         * provide some flexibility for implementors, since it is possible that not all
                         * implementations may take the view that a TE embodies its own inventory.</p>
                         * @param <T> Tile entity type, the specified TE must be a {#link Carrier}
                         */
                        // @ts-ignore
                        interface TileEntityInventory<T extends org.spongepowered.api.block.tileentity.TileEntity & org.spongepowered.api.item.inventory.Carrier> extends org.spongepowered.api.item.inventory.type.PersistentInventory, org.spongepowered.api.item.inventory.type.Interactable, org.spongepowered.api.item.inventory.type.CarriedInventory<T> {
                            /**
                             * Returns the owner of this Inventory.
                             * @return This inventory's carrier
                             */
                            // @ts-ignore
                            getTileEntity(): java.util.Optional<T>
                        }
                    }
                }
            }
        }
    }
}
