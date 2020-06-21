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
                    /**
                     * A chest inventory, with 0, 9, 18, 27, 36, 45, or 54 slots of type
                     * CONTAINER.
                     */
                    // @ts-ignore
                    readonly CHEST: org.bukkit.event.inventory.InventoryType
                    /**
                     * A dispenser inventory, with 9 slots of type CONTAINER.
                     */
                    // @ts-ignore
                    readonly DISPENSER: org.bukkit.event.inventory.InventoryType
                    /**
                     * A dropper inventory, with 9 slots of type CONTAINER.
                     */
                    // @ts-ignore
                    readonly DROPPER: org.bukkit.event.inventory.InventoryType
                    /**
                     * A furnace inventory, with a RESULT slot, a CRAFTING slot, and a FUEL
                     * slot.
                     */
                    // @ts-ignore
                    readonly FURNACE: org.bukkit.event.inventory.InventoryType
                    /**
                     * A workbench inventory, with 9 CRAFTING slots and a RESULT slot.
                     */
                    // @ts-ignore
                    readonly WORKBENCH: org.bukkit.event.inventory.InventoryType
                    /**
                     * A player's crafting inventory, with 4 CRAFTING slots and a RESULT slot.
                     * Also implies that the 4 ARMOR slots are accessible.
                     */
                    // @ts-ignore
                    readonly CRAFTING: org.bukkit.event.inventory.InventoryType
                    /**
                     * An enchantment table inventory, with two CRAFTING slots and three
                     * enchanting buttons.
                     */
                    // @ts-ignore
                    readonly ENCHANTING: org.bukkit.event.inventory.InventoryType
                    /**
                     * A brewing stand inventory, with one FUEL slot and four CRAFTING slots.
                     */
                    // @ts-ignore
                    readonly BREWING: org.bukkit.event.inventory.InventoryType
                    /**
                     * A player's inventory, with 9 QUICKBAR slots, 27 CONTAINER slots, 4 ARMOR
                     * slots and 1 offhand slot. The ARMOR and offhand slots may not be visible
                     * to the player, though.
                     */
                    // @ts-ignore
                    readonly PLAYER: org.bukkit.event.inventory.InventoryType
                    /**
                     * The creative mode inventory, with only 9 QUICKBAR slots and nothing
                     * else. (The actual creative interface with the items is client-side and
                     * cannot be altered by the server.)
                     */
                    // @ts-ignore
                    readonly CREATIVE: org.bukkit.event.inventory.InventoryType
                    /**
                     * The merchant inventory, with 2 CRAFTING slots, and 1 RESULT slot.
                     */
                    // @ts-ignore
                    readonly MERCHANT: org.bukkit.event.inventory.InventoryType
                    /**
                     * The ender chest inventory, with 27 slots.
                     */
                    // @ts-ignore
                    readonly ENDER_CHEST: org.bukkit.event.inventory.InventoryType
                    /**
                     * An anvil inventory, with 2 CRAFTING slots and 1 RESULT slot
                     */
                    // @ts-ignore
                    readonly ANVIL: org.bukkit.event.inventory.InventoryType
                    /**
                     * A beacon inventory, with 1 CRAFTING slot
                     */
                    // @ts-ignore
                    readonly BEACON: org.bukkit.event.inventory.InventoryType
                    /**
                     * A hopper inventory, with 5 slots of type CONTAINER.
                     */
                    // @ts-ignore
                    readonly HOPPER: org.bukkit.event.inventory.InventoryType
                    /**
                     * A shulker box inventory, with 27 slots of type CONTAINER.
                     */
                    // @ts-ignore
                    readonly SHULKER_BOX: org.bukkit.event.inventory.InventoryType
                    /**
                     * A barrel box inventory, with 27 slots of type CONTAINER.
                     */
                    // @ts-ignore
                    readonly BARREL: org.bukkit.event.inventory.InventoryType
                    /**
                     * A blast furnace inventory, with a RESULT slot, a CRAFTING slot, and a
                     * FUEL slot.
                     */
                    // @ts-ignore
                    readonly BLAST_FURNACE: org.bukkit.event.inventory.InventoryType
                    /**
                     * A lectern inventory, with 1 BOOK slot.
                     */
                    // @ts-ignore
                    readonly LECTERN: org.bukkit.event.inventory.InventoryType
                    /**
                     * A smoker inventory, with a RESULT slot, a CRAFTING slot, and a FUEL slot.
                     */
                    // @ts-ignore
                    readonly SMOKER: org.bukkit.event.inventory.InventoryType
                    /**
                     * Loom inventory, with 3 CRAFTING slots, and 1 RESULT slot.
                     */
                    // @ts-ignore
                    readonly LOOM: org.bukkit.event.inventory.InventoryType
                    /**
                     * Cartography inventory with 2 CRAFTING slots, and 1 RESULT slot.
                     */
                    // @ts-ignore
                    readonly CARTOGRAPHY: org.bukkit.event.inventory.InventoryType
                    /**
                     * Grindstone inventory with 2 CRAFTING slots, and 1 RESULT slot.
                     */
                    // @ts-ignore
                    readonly GRINDSTONE: org.bukkit.event.inventory.InventoryType
                    /**
                     * Stonecutter inventory with 1 CRAFTING slot, and 1 RESULT slot.
                     */
                    // @ts-ignore
                    readonly STONECUTTER: org.bukkit.event.inventory.InventoryType
                    // @ts-ignore
                    values(): org.bukkit.event.inventory.InventoryType[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.event.inventory.InventoryType
                    // @ts-ignore
                    getDefaultSize(): number /*int*/
                    // @ts-ignore
                    getDefaultTitle(): string
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
