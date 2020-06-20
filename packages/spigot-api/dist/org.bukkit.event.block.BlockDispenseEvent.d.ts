declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when an item is dispensed from a block.
                 * <p>
                 * If a Block Dispense event is cancelled, the block will not dispense the
                 * item.
                 */
                // @ts-ignore
                class BlockDispenseEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, dispensed: org.bukkit.inventory.ItemStack, velocity: org.bukkit.util.Vector)
                    /**
                     * Gets the item that is being dispensed. Modifying the returned item will
                     * have no effect, you must use {@link
                     * #setItem(org.bukkit.inventory.ItemStack)} instead.
                     * @return An ItemStack for the item being dispensed
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Sets the item being dispensed.
                     * @param item the item being dispensed
                     */
                    // @ts-ignore
                    setItem(item: org.bukkit.inventory.ItemStack): void
                    /**
                     * Gets the velocity.
                     * <p>
                     * Note: Modifying the returned Vector will not change the velocity, you
                     * must use {@link #setVelocity(org.bukkit.util.Vector)} instead.
                     * @return A Vector for the dispensed item's velocity
                     */
                    // @ts-ignore
                    getVelocity(): org.bukkit.util.Vector
                    /**
                     * Sets the velocity of the item being dispensed.
                     * @param vel the velocity of the item being dispensed
                     */
                    // @ts-ignore
                    setVelocity(vel: org.bukkit.util.Vector): void
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
