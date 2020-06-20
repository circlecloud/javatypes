declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * An interface to the inventory of a {@link Llama}.
             */
            // @ts-ignore
            interface LlamaInventory extends org.bukkit.inventory.AbstractHorseInventory {
                /**
                 * Gets the item in the llama's decor slot.
                 * @return the decor item
                 */
                // @ts-ignore
                getDecor(): org.bukkit.inventory.ItemStack
                /**
                 * Sets the item in the llama's decor slot.
                 * @param stack the new item
                 */
                // @ts-ignore
                setDecor(stack: org.bukkit.inventory.ItemStack): void
            }
        }
    }
}
