declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Represents the effect of a drag that will be applied to an Inventory in an
                 * InventoryDragEvent.
                 */
                // @ts-ignore
                class DragType extends java.lang.Enum<org.bukkit.event.inventory.DragType> {
                    /**
                     * One item from the cursor is placed in each selected slot.
                     */
                    // @ts-ignore
                    readonly SINGLE: org.bukkit.event.inventory.DragType
                    /**
                     * The cursor is split evenly across all selected slots, not to exceed the
                     * Material's max stack size, with the remainder going to the cursor.
                     */
                    // @ts-ignore
                    readonly EVEN: org.bukkit.event.inventory.DragType
                    // @ts-ignore
                    values(): org.bukkit.event.inventory.DragType[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.event.inventory.DragType
                }
            }
        }
    }
}
