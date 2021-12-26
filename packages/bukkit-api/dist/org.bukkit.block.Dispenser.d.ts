declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a dispenser.
             */
            // @ts-ignore
            interface Dispenser extends org.bukkit.block.Container, org.bukkit.Nameable, org.bukkit.loot.Lootable {
                /**
                 * Gets the BlockProjectileSource object for the dispenser.
                 * <p>
                 * If the block represented by this state is no longer a dispenser, this
                 * will return null.
                 * @return a BlockProjectileSource if valid, otherwise null
                 * @throws IllegalStateException if this block state is not placed
                 */
                // @ts-ignore
                getBlockProjectileSource(): org.bukkit.projectiles.BlockProjectileSource
                /**
                 * Attempts to dispense the contents of the dispenser.
                 * <p>
                 * If the block represented by this state is no longer a dispenser, this
                 * will return false.
                 * @return true if successful, otherwise false
                 * @throws IllegalStateException if this block state is not placed
                 */
                // @ts-ignore
                dispense(): boolean
            }
        }
    }
}
