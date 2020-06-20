declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents an item that can be repaired at an anvil.
                 */
                // @ts-ignore
                interface Repairable {
                    /**
                     * Checks to see if this has a repair penalty
                     * @return true if this has a repair penalty
                     */
                    // @ts-ignore
                    hasRepairCost(): boolean
                    /**
                     * Gets the repair penalty
                     * @return the repair penalty
                     */
                    // @ts-ignore
                    getRepairCost(): int
                    /**
                     * Sets the repair penalty
                     * @param cost repair penalty
                     */
                    // @ts-ignore
                    setRepairCost(cost: number /*int*/): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.Repairable
                }
            }
        }
    }
}
