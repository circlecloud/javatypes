declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Represents a block related event.
                 */
                // @ts-ignore
                abstract class BlockEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    block: org.bukkit.block.Block
                    /**
                     * Gets the block involved in this event.
                     * @return The Block which block is involved in this event
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block
                }
            }
        }
    }
}
