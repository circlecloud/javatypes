declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    /**
                     * An enumeration of {@link InventoryArchetype}s.
                     */
                    // @ts-ignore
                    class InventoryArchetypes extends java.lang.Object {
                        /**
                         * You should not be using this constructor, it will be made private in
                         * API 8.
                         * @deprecated Will be made private in API 8
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * A single Inventory Slot.
                         */
                        // @ts-ignore
                        readonly SLOT: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A row of Slots. 9 Slots by default.
                         */
                        // @ts-ignore
                        readonly MENU_ROW: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A grid of Slots.
                         */
                        // @ts-ignore
                        readonly MENU_GRID: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A column of Slots.
                         */
                        // @ts-ignore
                        readonly MENU_COLUMN: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Slot acting like a button.
                         */
                        // @ts-ignore
                        readonly MENU_BUTTON: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Slot acting like an icon.
                         */
                        // @ts-ignore
                        readonly MENU_ICON: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Slot that can toggle between two icon states.
                         */
                        // @ts-ignore
                        readonly MENU_CHECKBOX: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * An icon Slot that can count up and down.
                         */
                        // @ts-ignore
                        readonly MENU_SPINNER: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Players personal crafting area. Output with 2x2 Grid
                         */
                        // @ts-ignore
                        readonly CRAFTING: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Chest. Sizes from 9x1 to 9x6 are allowed. The default is 9x3.
                         * <p>When displaying the inventory the actual arrangement of slot
                         * does not matter. This means, that when creating a 3x3 CHEST inventory it
                         * will still be displayed as 9x1 to the player.</p>
                         */
                        // @ts-ignore
                        readonly CHEST: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A DoubleChest. Sizes 9x1 to 9x6 are allowed. The default is 9x6.
                         */
                        // @ts-ignore
                        readonly DOUBLE_CHEST: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Hopper. The size is always 5x1
                         */
                        // @ts-ignore
                        readonly HOPPER: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Dispenser or Dropper. The size is always 3x3
                         */
                        // @ts-ignore
                        readonly DISPENSER: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Workbench. The size is always 3x3 + 1 OutputSlot
                         */
                        // @ts-ignore
                        readonly WORKBENCH: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Furnace. The size is always 3 slots
                         */
                        // @ts-ignore
                        readonly FURNACE: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A EnchantingTable. The size is always 2 slots.
                         */
                        // @ts-ignore
                        readonly ENCHANTING_TABLE: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Anvil. The size is always 3 slots.
                         */
                        // @ts-ignore
                        readonly ANVIL: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A BrewingStand. 5 Slots.
                         */
                        // @ts-ignore
                        readonly BREWING_STAND: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Beacon. The size is always one slot.
                         */
                        // @ts-ignore
                        readonly BEACON: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A RideableHorse, Donkey or Mule usually 2 Slots.
                         */
                        // @ts-ignore
                        readonly HORSE: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Villager. The size is always 3 slots.
                         */
                        // @ts-ignore
                        readonly VILLAGER: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Donkey or Mule with Chest. 2 Slots and 5x3 Chest
                         * Needs a horse as carrier to show to player in Vanilla.
                         */
                        // @ts-ignore
                        readonly HORSE_WITH_CHEST: org.spongepowered.api.item.inventory.InventoryArchetype
                        /**
                         * A Player. Includes 9x3 main inventory, 9x1 Hotbar, 4 Armorslots and 2x2
                         * Crafting area.
                         * <p>Cannot be opened by the server in Vanilla.</p>
                         */
                        // @ts-ignore
                        readonly PLAYER: org.spongepowered.api.item.inventory.InventoryArchetype
                        // @ts-ignore
                        readonly UNKNOWN: org.spongepowered.api.item.inventory.InventoryArchetype
                    }
                }
            }
        }
    }
}
