declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents Horse-like creatures which can carry an inventory.
             */
            // @ts-ignore
            interface ChestedHorse extends org.bukkit.entity.AbstractHorse {
                /**
                 * Gets whether the horse has a chest equipped.
                 * @return true if the horse has chest storage
                 */
                // @ts-ignore
                isCarryingChest(): boolean
                /**
                 * Sets whether the horse has a chest equipped. Removing a chest will also
                 * clear the chest's inventory.
                 * @param chest true if the horse should have a chest
                 */
                // @ts-ignore
                setCarryingChest(chest: boolean): void
            }
        }
    }
}
