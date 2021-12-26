declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block fades, melts or disappears based on world conditions
                 * <p>
                 * Examples:
                 * <ul>
                 * <li>Snow melting due to being near a light source.
                 * <li>Ice melting due to being near a light source.
                 * <li>Fire burning out after time, without destroying fuel block.
                 * <li>Coral fading to dead coral due to lack of water</li>
                 * <li>Turtle Egg bursting when a turtle hatches</li>
                 * </ul>
                 * <p>
                 * If a Block Fade event is cancelled, the block will not fade, melt or
                 * disappear.
                 */
                // @ts-ignore
                class BlockFadeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    /**
                     * Gets the state of the block that will be fading, melting or
                     * disappearing.
                     * @return The block state of the block that will be fading, melting or
                     *      disappearing
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
