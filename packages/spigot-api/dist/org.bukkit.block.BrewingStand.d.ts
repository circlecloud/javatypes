declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a brewing stand.
             */
            // @ts-ignore
            interface BrewingStand extends org.bukkit.block.Container {
                /**
                 * How much time is left in the brewing cycle.
                 * @return Brew Time
                 */
                // @ts-ignore
                getBrewingTime(): int
                /**
                 * Set the time left before brewing completes.
                 * @param brewTime Brewing time
                 */
                // @ts-ignore
                setBrewingTime(brewTime: number /*int*/): void
                /**
                 * Get the level of current fuel for brewing.
                 * @return The fuel level
                 */
                // @ts-ignore
                getFuelLevel(): int
                /**
                 * Set the level of current fuel for brewing.
                 * @param level fuel level
                 */
                // @ts-ignore
                setFuelLevel(level: number /*int*/): void
                // @ts-ignore
                getInventory(): org.bukkit.inventory.BrewerInventory
                // @ts-ignore
                getSnapshotInventory(): org.bukkit.inventory.BrewerInventory
            }
        }
    }
}
