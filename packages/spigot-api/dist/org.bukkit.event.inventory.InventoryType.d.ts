declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Represents the different kinds of inventories available in Bukkit.
                 * <br>
                 * Only InventoryTypes marked {@link #isCreatable()} can be created.
                 * <br>
                 * The current list of inventories that cannot be created via
                 * {@link org.bukkit.Bukkit#createInventory} are:<br>
                 * <blockquote>
                 * {@link InventoryType#CREATIVE}, {@link InventoryType#CRAFTING} and
                 * {@link InventoryType#MERCHANT}
                 * </blockquote>
                 * See {@link org.bukkit.Bukkit#createInventory} for more information.
                 * @see org.bukkit.Bukkit#createInventory(InventoryHolder, InventoryType)
                 */
                // @ts-ignore
                class InventoryType extends java.lang.Enum<org.bukkit.event.inventory.InventoryType> {
                    // @ts-ignore
                    values(): org.bukkit.event.inventory.InventoryType[]
                    // @ts-ignore
                    valueOf(name: string): org.bukkit.event.inventory.InventoryType
                    // @ts-ignore
                    getDefaultSize(): int
                    // @ts-ignore
                    getDefaultTitle(): java.lang.String
                    /**
                     * Denotes that this InventoryType can be created via the normal
                     * {@link org.bukkit.Bukkit#createInventory} methods.
                     * @return if this InventoryType can be created and shown to a player
                     */
                    // @ts-ignore
                    isCreatable(): boolean
                }
            }
        }
    }
}
