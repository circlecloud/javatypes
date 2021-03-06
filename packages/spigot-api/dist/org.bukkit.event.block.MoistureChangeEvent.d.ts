declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when the moisture level of a soil block changes.
                 */
                // @ts-ignore
                class MoistureChangeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, newState: org.bukkit.block.BlockState)
                    /**
                     * Gets the new state of the affected block.
                     * @return new block state
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
