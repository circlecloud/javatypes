declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace InventoryView {
                /**
                 * Represents various extra properties of certain inventory windows.
                 */
                // @ts-ignore
                class Property extends java.lang.Enum<org.bukkit.inventory.InventoryView.Property> {
                    /**
                     * The progress of the down-pointing arrow in a brewing inventory.
                     */
                    // @ts-ignore
                    readonly BREW_TIME: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The progress of the fuel slot in a brewing inventory.
                     * This is a value between 0 and 20, with 0 making the bar empty, and 20
                     * making the bar full.
                     */
                    // @ts-ignore
                    readonly FUEL_TIME: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The progress of the flame in a furnace inventory.
                     */
                    // @ts-ignore
                    readonly BURN_TIME: org.bukkit.inventory.InventoryView.Property
                    /**
                     * How many total ticks the current fuel should last.
                     */
                    // @ts-ignore
                    readonly TICKS_FOR_CURRENT_FUEL: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The progress of the right-pointing arrow in a furnace inventory.
                     */
                    // @ts-ignore
                    readonly COOK_TIME: org.bukkit.inventory.InventoryView.Property
                    /**
                     * How many total ticks the current smelting should last.
                     */
                    // @ts-ignore
                    readonly TICKS_FOR_CURRENT_SMELTING: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the top button's experience level
                     * value.
                     */
                    // @ts-ignore
                    readonly ENCHANT_BUTTON1: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the middle button's experience level
                     * value.
                     */
                    // @ts-ignore
                    readonly ENCHANT_BUTTON2: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the bottom button's experience level
                     * value.
                     */
                    // @ts-ignore
                    readonly ENCHANT_BUTTON3: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the first four bits of the player's xpSeed.
                     */
                    // @ts-ignore
                    readonly ENCHANT_XP_SEED: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the top button's enchantment's id
                     */
                    // @ts-ignore
                    readonly ENCHANT_ID1: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the middle button's enchantment's id
                     */
                    // @ts-ignore
                    readonly ENCHANT_ID2: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the bottom button's enchantment's id
                     */
                    // @ts-ignore
                    readonly ENCHANT_ID3: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the top button's level value.
                     */
                    // @ts-ignore
                    readonly ENCHANT_LEVEL1: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the middle button's level value.
                     */
                    // @ts-ignore
                    readonly ENCHANT_LEVEL2: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the bottom button's level value.
                     */
                    // @ts-ignore
                    readonly ENCHANT_LEVEL3: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an beacon inventory, the levels of the beacon
                     */
                    // @ts-ignore
                    readonly LEVELS: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an beacon inventory, the primary potion effect
                     */
                    // @ts-ignore
                    readonly PRIMARY_EFFECT: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an beacon inventory, the secondary potion effect
                     */
                    // @ts-ignore
                    readonly SECONDARY_EFFECT: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The repair's cost in xp levels
                     */
                    // @ts-ignore
                    readonly REPAIR_COST: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The lectern's current open book page
                     */
                    // @ts-ignore
                    readonly BOOK_PAGE: org.bukkit.inventory.InventoryView.Property
                    // @ts-ignore
                    values(): org.bukkit.inventory.InventoryView.Property[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.inventory.InventoryView.Property
                    // @ts-ignore
                    getType(): org.bukkit.event.inventory.InventoryType
                    /**
                     * Gets the id of this view.
                     * @return the id of this view
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    getId(): number /*int*/
                }
            }
        }
    }
}
