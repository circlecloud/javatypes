declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * A Carrier is simply something that carries an {@link Inventory}.
                     */
                    // @ts-ignore
                    interface Carrier {
                        /**
                         * Returns the inventory that this Carrier is holding.
                         * @return The inventory this Carrier is holding
                         */
                        // @ts-ignore
                        getInventory(): org.spongepowered.api.item.inventory.type.CarriedInventory<any>
                    }
                }
            }
        }
    }
}
