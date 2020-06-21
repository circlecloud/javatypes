declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                namespace InventoryType {
                    // @ts-ignore
                    class SlotType extends java.lang.Enum<org.bukkit.event.inventory.InventoryType.SlotType> {
                        /**
                         * A result slot in a furnace or crafting inventory.
                         */
                        // @ts-ignore
                        readonly RESULT: org.bukkit.event.inventory.InventoryType.SlotType
                        /**
                         * A slot in the crafting matrix, or an 'input' slot.
                         */
                        // @ts-ignore
                        readonly CRAFTING: org.bukkit.event.inventory.InventoryType.SlotType
                        /**
                         * An armour slot in the player's inventory.
                         */
                        // @ts-ignore
                        readonly ARMOR: org.bukkit.event.inventory.InventoryType.SlotType
                        /**
                         * A regular slot in the container or the player's inventory; anything
                         * not covered by the other enum values.
                         */
                        // @ts-ignore
                        readonly CONTAINER: org.bukkit.event.inventory.InventoryType.SlotType
                        /**
                         * A slot in the bottom row or quickbar.
                         */
                        // @ts-ignore
                        readonly QUICKBAR: org.bukkit.event.inventory.InventoryType.SlotType
                        /**
                         * A pseudo-slot representing the area outside the inventory window.
                         */
                        // @ts-ignore
                        readonly OUTSIDE: org.bukkit.event.inventory.InventoryType.SlotType
                        /**
                         * The fuel slot in a furnace inventory, or the ingredient slot in a
                         * brewing stand inventory.
                         */
                        // @ts-ignore
                        readonly FUEL: org.bukkit.event.inventory.InventoryType.SlotType
                        // @ts-ignore
                        values(): org.bukkit.event.inventory.InventoryType.SlotType[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.inventory.InventoryType.SlotType
                    }
                }
            }
        }
    }
}
