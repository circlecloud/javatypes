declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace minecart {
                /**
                 * Represents a Minecart with a Hopper inside it
                 */
                // @ts-ignore
                interface HopperMinecart extends org.bukkit.entity.Minecart, org.bukkit.inventory.InventoryHolder, org.bukkit.loot.Lootable {
                    /**
                     * Checks whether or not this Minecart will pick up
                     * items into its inventory.
                     * @return true if the Minecart will pick up items
                     */
                    // @ts-ignore
                    isEnabled(): boolean
                    /**
                     * Sets whether this Minecart will pick up items.
                     * @param enabled new enabled state
                     */
                    // @ts-ignore
                    setEnabled(enabled: boolean): void
                }
            }
        }
    }
}
