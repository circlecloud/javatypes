declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * An interface to the inventory of an {@link AbstractHorse}.
             */
            // @ts-ignore
            interface AbstractHorseInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Gets the item in the horse's saddle slot.
                 * @return the saddle item
                 */
                // @ts-ignore
                getSaddle(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item in the horse's saddle slot.
                 * @param stack the new item
                 */
                // @ts-ignore
                setSaddle(stack: org.bukkit.inventory.ItemStack): void
            }
        }
    }
}
