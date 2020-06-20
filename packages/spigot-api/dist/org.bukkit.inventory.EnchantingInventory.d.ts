declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Interface to the inventory of an Enchantment Table.
             */
            // @ts-ignore
            interface EnchantingInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Set the item being enchanted.
                 * @param item The new item
                 */
                // @ts-ignore
                setItem(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Get the item being enchanted.
                 * @return The current item.
                 */
                // @ts-ignore
                getItem(): org.bukkit.inventory.ItemStack
                /**
                 * Set the secondary item being used for the enchant.
                 * @param item The new item
                 */
                // @ts-ignore
                setSecondary(item: org.bukkit.inventory.ItemStack): void
                /**
                 * Get the secondary item being used for the enchant.
                 * @return The second item
                 */
                // @ts-ignore
                getSecondary(): org.bukkit.inventory.ItemStack
            }
        }
    }
}
