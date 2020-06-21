declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a furnace.
             */
            // @ts-ignore
            interface Furnace extends org.bukkit.block.Container {
                /**
                 * Get burn time.
                 * @return Burn time
                 */
                // @ts-ignore
                getBurnTime(): number /*short*/
                /**
                 * Set burn time.
                 * A burn time greater than 0 will cause this block to be lit, whilst a time
                 * less than 0 will extinguish it.
                 * @param burnTime Burn time
                 */
                // @ts-ignore
                setBurnTime(burnTime: number /*short*/): void
                /**
                 * Get cook time.
                 * This is the amount of time the item has been cooking for.
                 * @return Cook time
                 */
                // @ts-ignore
                getCookTime(): number /*short*/
                /**
                 * Set cook time.
                 * This is the amount of time the item has been cooking for.
                 * @param cookTime Cook time
                 */
                // @ts-ignore
                setCookTime(cookTime: number /*short*/): void
                /**
                 * Get cook time total.
                 * This is the amount of time the item is required to cook for.
                 * @return Cook time total
                 */
                // @ts-ignore
                getCookTimeTotal(): number /*int*/
                /**
                 * Set cook time.
                 * This is the amount of time the item is required to cook for.
                 * @param cookTimeTotal Cook time total
                 */
                // @ts-ignore
                setCookTimeTotal(cookTimeTotal: number /*int*/): void
                // @ts-ignore
                getInventory(): org.bukkit.inventory.FurnaceInventory
                // @ts-ignore
                getSnapshotInventory(): org.bukkit.inventory.FurnaceInventory
            }
        }
    }
}
