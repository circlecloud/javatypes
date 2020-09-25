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
                    public static readonly BREW_TIME: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The progress of the fuel slot in a brewing inventory.
                     * This is a value between 0 and 20, with 0 making the bar empty, and 20
                     * making the bar full.
                     */
                    // @ts-ignore
                    public static readonly FUEL_TIME: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The progress of the flame in a furnace inventory.
                     */
                    // @ts-ignore
                    public static readonly BURN_TIME: org.bukkit.inventory.InventoryView.Property
                    /**
                     * How many total ticks the current fuel should last.
                     */
                    // @ts-ignore
                    public static readonly TICKS_FOR_CURRENT_FUEL: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The progress of the right-pointing arrow in a furnace inventory.
                     */
                    // @ts-ignore
                    public static readonly COOK_TIME: org.bukkit.inventory.InventoryView.Property
                    /**
                     * How many total ticks the current smelting should last.
                     */
                    // @ts-ignore
                    public static readonly TICKS_FOR_CURRENT_SMELTING: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the top button's experience level
                     * value.
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_BUTTON1: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the middle button's experience level
                     * value.
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_BUTTON2: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the bottom button's experience level
                     * value.
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_BUTTON3: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the first four bits of the player's xpSeed.
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_XP_SEED: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the top button's enchantment's id
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_ID1: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the middle button's enchantment's id
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_ID2: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the bottom button's enchantment's id
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_ID3: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the top button's level value.
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_LEVEL1: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the middle button's level value.
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_LEVEL2: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an enchanting inventory, the bottom button's level value.
                     */
                    // @ts-ignore
                    public static readonly ENCHANT_LEVEL3: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an beacon inventory, the levels of the beacon
                     */
                    // @ts-ignore
                    public static readonly LEVELS: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an beacon inventory, the primary potion effect
                     */
                    // @ts-ignore
                    public static readonly PRIMARY_EFFECT: org.bukkit.inventory.InventoryView.Property
                    /**
                     * In an beacon inventory, the secondary potion effect
                     */
                    // @ts-ignore
                    public static readonly SECONDARY_EFFECT: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The repair's cost in xp levels
                     */
                    // @ts-ignore
                    public static readonly REPAIR_COST: org.bukkit.inventory.InventoryView.Property
                    /**
                     * The lectern's current open book page
                     */
                    // @ts-ignore
                    public static readonly BOOK_PAGE: org.bukkit.inventory.InventoryView.Property
                    // @ts-ignore
                    public static values(): org.bukkit.inventory.InventoryView.Property[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.inventory.InventoryView.Property
                    // @ts-ignore
                    public getType(): org.bukkit.event.inventory.InventoryType
                    /**
                     * Gets the id of this view.
                     * @return the id of this view
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    public getId(): number /*int*/
                }
            }
        }
    }
}
