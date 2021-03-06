declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block grows naturally in the world.
                 * <p>
                 * Examples:
                 * <ul>
                 * <li>Wheat
                 * <li>Sugar Cane
                 * <li>Cactus
                 * <li>Watermelon
                 * <li>Pumpkin
                 * <li>Turtle Egg
                 * </ul>
                 * <p>
                 * If a Block Grow event is cancelled, the block will not grow.
                 */
                // @ts-ignore
                class BlockGrowEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    /**
                     * Gets the state of the block where it will form or spread to.
                     * @return The block state for this events block
                     */
                    // @ts-ignore
                    public getNewState(): org.bukkit.block.BlockState
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
