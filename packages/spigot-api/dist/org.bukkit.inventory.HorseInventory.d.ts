declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * An interface to the inventory of a Horse.
             */
            // @ts-ignore
            interface HorseInventory extends org.bukkit.inventory.AbstractHorseInventory {
                /**
                 * Gets the item in the horse's armor slot.
                 * @return the armor item
                 */
                // @ts-ignore
                getArmor(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item in the horse's armor slot.
                 * @param stack the new item
                 */
                // @ts-ignore
                setArmor(stack: org.bukkit.inventory.ItemStack): void
            }
        }
    }
}
