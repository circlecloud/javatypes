declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a sized fireball.
             */
            // @ts-ignore
            interface SizedFireball extends org.bukkit.entity.Fireball {
                /**
                 * Gets the display {@link ItemStack}.
                 * @return display ItemStack
                 */
                // @ts-ignore
                getDisplayItem(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the display {@link ItemStack} for the fireball.
                 * @param item the ItemStack to display
                 */
                // @ts-ignore
                setDisplayItem(item: org.bukkit.inventory.ItemStack): void
            }
        }
    }
}
