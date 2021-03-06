declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * An event that's called when a block yields experience.
                 */
                // @ts-ignore
                class BlockExpEvent extends org.bukkit.event.block.BlockEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, exp: number /*int*/)
                    /**
                     * Get the experience dropped by the block after the event has processed
                     * @return The experience to drop
                     */
                    // @ts-ignore
                    public getExpToDrop(): number /*int*/
                    /**
                     * Set the amount of experience dropped by the block after the event has
                     * processed
                     * @param exp 1 or higher to drop experience, else nothing will drop
                     */
                    // @ts-ignore
                    public setExpToDrop(exp: number /*int*/): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
