declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                /**
                 * Called when an ItemStack is successfully burned as fuel in a furnace.
                 */
                // @ts-ignore
                class FurnaceBurnEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(furnace: org.bukkit.block.Block, fuel: org.bukkit.inventory.ItemStack, burnTime: number /*int*/)
                    /**
                     * Gets the fuel ItemStack for this event
                     * @return the fuel ItemStack
                     */
                    // @ts-ignore
                    getFuel(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the burn time for this fuel
                     * @return the burn time for this fuel
                     */
                    // @ts-ignore
                    getBurnTime(): int
                    /**
                     * Sets the burn time for this fuel
                     * @param burnTime the burn time for this fuel
                     */
                    // @ts-ignore
                    setBurnTime(burnTime: number /*int*/): void
                    /**
                     * Gets whether the furnace's fuel is burning or not.
                     * @return whether the furnace's fuel is burning or not.
                     */
                    // @ts-ignore
                    isBurning(): boolean
                    /**
                     * Sets whether the furnace's fuel is burning or not.
                     * @param burning true if the furnace's fuel is burning
                     */
                    // @ts-ignore
                    setBurning(burning: boolean): void
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
