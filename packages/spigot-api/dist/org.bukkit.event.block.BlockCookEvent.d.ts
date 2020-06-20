declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when an ItemStack is successfully cooked in a block.
                 */
                // @ts-ignore
                class BlockCookEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, source: org.bukkit.inventory.ItemStack, result: org.bukkit.inventory.ItemStack)
                    /**
                     * Gets the smelted ItemStack for this event
                     * @return smelting source ItemStack
                     */
                    // @ts-ignore
                    getSource(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the resultant ItemStack for this event
                     * @return smelting result ItemStack
                     */
                    // @ts-ignore
                    getResult(): org.bukkit.inventory.ItemStack
                    /**
                     * Sets the resultant ItemStack for this event
                     * @param result new result ItemStack
                     */
                    // @ts-ignore
                    setResult(result: org.bukkit.inventory.ItemStack): void
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
