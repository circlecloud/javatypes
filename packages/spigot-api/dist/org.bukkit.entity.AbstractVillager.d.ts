declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a villager NPC
             */
            // @ts-ignore
            interface AbstractVillager extends org.bukkit.entity.Breedable, org.bukkit.entity.NPC, org.bukkit.inventory.InventoryHolder, org.bukkit.inventory.Merchant {
                /**
                 * Gets this villager's inventory.
                 * <br>
                 * Note that this inventory is not the Merchant inventory, rather, it is the
                 * items that a villager might have collected (from harvesting crops, etc.)
                 * {@inheritDoc}
                 */
                // @ts-ignore
                getInventory(): org.bukkit.inventory.Inventory
            }
        }
    }
}
