declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block spreads based on world conditions.
                 * <p>
                 * Use {@link BlockFormEvent} to catch blocks that "randomly" form instead of
                 * actually spread.
                 * <p>
                 * Examples:
                 * <ul>
                 * <li>Mushrooms spreading.
                 * <li>Fire spreading.
                 * </ul>
                 * <p>
                 * If a Block Spread event is cancelled, the block will not spread.
                 * @see BlockFormEvent
                 */
                // @ts-ignore
                class BlockSpreadEvent extends org.bukkit.event.block.BlockFormEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, source: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    /**
                     * Gets the source block involved in this event.
                     * @return the Block for the source block involved in this event.
                     */
                    // @ts-ignore
                    getSource(): org.bukkit.block.Block
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
