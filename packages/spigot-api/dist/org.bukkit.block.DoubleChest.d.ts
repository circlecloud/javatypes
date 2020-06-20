declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a double chest.
             */
            // @ts-ignore
            class DoubleChest extends java.lang.Object implements org.bukkit.inventory.InventoryHolder {
                // @ts-ignore
                constructor(chest: org.bukkit.inventory.DoubleChestInventory)
                // @ts-ignore
                getInventory(): org.bukkit.inventory.Inventory
                // @ts-ignore
                getLeftSide(): org.bukkit.inventory.InventoryHolder
                // @ts-ignore
                getRightSide(): org.bukkit.inventory.InventoryHolder
                // @ts-ignore
                getLocation(): org.bukkit.Location
                // @ts-ignore
                getWorld(): org.bukkit.World
                // @ts-ignore
                getX(): double
                // @ts-ignore
                getY(): double
                // @ts-ignore
                getZ(): double
            }
        }
    }
}
