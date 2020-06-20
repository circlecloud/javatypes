declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace minecart {
                /**
                 * Represents a minecart with a chest. These types of {@link Minecart
                 * minecarts} have their own inventory that can be accessed using methods
                 * from the {@link InventoryHolder} interface.
                 */
                // @ts-ignore
                interface StorageMinecart extends org.bukkit.entity.Minecart, org.bukkit.inventory.InventoryHolder, org.bukkit.loot.Lootable {
                }
            }
        }
    }
}
