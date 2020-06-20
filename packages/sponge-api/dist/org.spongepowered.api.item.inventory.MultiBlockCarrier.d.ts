declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * Represents Multiple Blocks that are the Carrier for an Inventory.
                     * e.g. A DoubleChest Inventory carried by two blocks
                     */
                    // @ts-ignore
                    interface MultiBlockCarrier extends org.spongepowered.api.item.inventory.BlockCarrier {
                        /**
                         * Returns the Locations of the Blocks.
                         * @return The Locations of the Blocks
                         */
                        // @ts-ignore
                        getLocations(): java.util.List<org.spongepowered.api.world.Location<org.spongepowered.api.world.World>>
                        /**
                         * Returns the Inventory at given location if owned by this Carrier.
                         * @param at The location
                         * @return The inventory at given location
                         */
                        // @ts-ignore
                        getInventory(at: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): java.util.Optional<org.spongepowered.api.item.inventory.Inventory>
                        /**
                         * Returns the Inventory at given location if owned by this Carrier and
                         * accessible from given direction.
                         * <p>e.g. A Furnace accessed from {@link Direction#DOWN} will return
                         * its Fuel Slot</p>
                         * @param at The Location
                         * @param from The Direction
                         * @return The inventory at the location when accessed from given direction
                         */
                        // @ts-ignore
                        getInventory(at: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, from: org.spongepowered.api.util.Direction): java.util.Optional<org.spongepowered.api.item.inventory.Inventory>
                    }
                }
            }
        }
    }
}
