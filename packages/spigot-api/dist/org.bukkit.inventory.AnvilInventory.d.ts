declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Interface to the inventory of an Anvil.
             */
            // @ts-ignore
            interface AnvilInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the name to be applied to the repaired item. An empty string denotes
                 * the default item name.
                 * @return the rename text
                 */
                // @ts-ignore
                getRenameText(): java.lang.String
                /**
                 * Get the experience cost (in levels) to complete the current repair.
                 * @return the experience cost
                 */
                // @ts-ignore
                getRepairCost(): int
                /**
                 * Set the experience cost (in levels) to complete the current repair.
                 * @param levels the experience cost
                 */
                // @ts-ignore
                setRepairCost(levels: number /*int*/): void
                /**
                 * Get the maximum experience cost (in levels) to be allowed by the current
                 * repair. If the result of {@link #getRepairCost()} exceeds the returned
                 * value, the repair result will be air to due being "too expensive".
                 * <p>
                 * By default, this level is set to 40. Players in creative mode ignore the
                 * maximum repair cost.
                 * @return the maximum experience cost
                 */
                // @ts-ignore
                getMaximumRepairCost(): int
                /**
                 * Set the maximum experience cost (in levels) to be allowed by the current
                 * repair. The default value set by vanilla Minecraft is 40.
                 * @param levels the maximum experience cost
                 */
                // @ts-ignore
                setMaximumRepairCost(levels: number /*int*/): void
            }
        }
    }
}
