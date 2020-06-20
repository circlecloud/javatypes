declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    namespace carrier {
                        /**
                         * Represents a {@link TileEntity} that is a carrier of
                         * {@link TileEntityInventory}.
                         * <p>Additional information regarding the {@link TileEntityCarrier} is
                         * dependent on the {@link TileEntity} itself.</p>
                         */
                        // @ts-ignore
                        interface TileEntityCarrier extends org.spongepowered.api.block.tileentity.TileEntity, org.spongepowered.api.item.inventory.BlockCarrier {
                            // @ts-ignore
                            getInventory(): org.spongepowered.api.item.inventory.type.TileEntityInventory<org.spongepowered.api.block.tileentity.carrier.TileEntityCarrier>
                        }
                    }
                }
            }
        }
    }
}
