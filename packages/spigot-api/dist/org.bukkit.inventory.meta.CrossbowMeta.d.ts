declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface CrossbowMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Returns whether the item has any charged projectiles.
                     * @return whether charged projectiles are present
                     */
                    // @ts-ignore
                    hasChargedProjectiles(): boolean
                    /**
                     * Returns an immutable list of the projectiles charged on this item.
                     * @return charged projectiles
                     */
                    // @ts-ignore
                    getChargedProjectiles(): java.util.List<org.bukkit.inventory.ItemStack>
                    /**
                     * Sets the projectiles charged on this item.
                     * Removes all projectiles when given null.
                     * @param projectiles the projectiles to set
                     * @throws IllegalArgumentException if one of the projectiles is not an
                     *  arrow or firework rocket
                     */
                    // @ts-ignore
                    setChargedProjectiles(projectiles: Array<org.bukkit.inventory.ItemStack>): void
                    /**
                     * Adds a charged projectile to this item.
                     * @param item projectile
                     * @throws IllegalArgumentException if the projectile is not an arrow or
                     *  firework rocket
                     */
                    // @ts-ignore
                    addChargedProjectile(item: org.bukkit.inventory.ItemStack): void
                }
            }
        }
    }
}
