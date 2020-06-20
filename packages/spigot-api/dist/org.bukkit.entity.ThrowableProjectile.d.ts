declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface ThrowableProjectile extends org.bukkit.entity.Projectile {
                /**
                 * Gets the ItemStack the thrown projectile will display.
                 * @return The thrown item display ItemStack
                 */
                // @ts-ignore
                getItem(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the display ItemStack for the thrown projectile.
                 * @param item ItemStack set to be displayed
                 */
                // @ts-ignore
                setItem(item: org.bukkit.inventory.ItemStack): void
            }
        }
    }
}
