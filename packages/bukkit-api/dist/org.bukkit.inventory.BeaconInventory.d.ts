declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Interface to the inventory of a Beacon.
             */
            // @ts-ignore
            interface BeaconInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Set the item powering the beacon.
                 * @param item The new item
                 */
                // @ts-ignore
                setItem(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Get the item powering the beacon.
                 * @return The current item.
                 */
                // @ts-ignore
                getItem(): org.bukkit.inventory.ItemStack
            }
        }
    }
}
