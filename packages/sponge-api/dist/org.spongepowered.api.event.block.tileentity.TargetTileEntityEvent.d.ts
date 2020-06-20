declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace block {
                    namespace tileentity {
                        /**
                         * An event where a {@link TileEntity} is being targeted.
                         */
                        // @ts-ignore
                        interface TargetTileEntityEvent extends org.spongepowered.api.event.Event {
                            /**
                             * Gets the target tile entity.
                             * @return Gets the targeted tile entity
                             */
                            // @ts-ignore
                            getTargetTile(): org.spongepowered.api.block.tileentity.TileEntity
                        }
                    }
                }
            }
        }
    }
}
