declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace InventoryView {
                /**
                 * Represents various extra properties of certain inventory windows.
                 */
                // @ts-ignore
                class Property extends java.lang.Enum<org.bukkit.inventory.InventoryView.Property> {
                    // @ts-ignore
                    values(): org.bukkit.inventory.InventoryView.Property[]
                    // @ts-ignore
                    valueOf(name: string): org.bukkit.inventory.InventoryView.Property
                    // @ts-ignore
                    getType(): org.bukkit.event.inventory.InventoryType
                    /**
                     * Gets the id of this view.
                     * @return the id of this view
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    getId(): int
                }
            }
        }
    }
}
