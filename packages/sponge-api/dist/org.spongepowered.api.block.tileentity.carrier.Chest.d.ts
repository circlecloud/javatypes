declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        /**
                         * Represents a Chest.
                         */
                        // @ts-ignore
                        interface Chest extends org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier {
                            /**
                             * Returns the inventory representing the combination of this chest
                             * and its neighbor (which form a double chest), if available.
                             * <p>If this chest is not part of a double chest, then this method
                             * will return {@link Optional#empty()}.</p>
                             * @return The combined inventory, if available
                             */
                            // @ts-ignore
                            getDoubleChestInventory(): java.util.Optional<org.spongepowered.api.item.inventory.Inventory>
                            /**
                             * Returns the connected {@link Chest}s, if available.
                             * @return The connected Chests, if available
                             */
                            // @ts-ignore
                            getConnectedChests(): Array<org.spongepowered.api.block.tileentity.carrier.Chest>
                        }
                    }
                }
            }
        }
    }
}
