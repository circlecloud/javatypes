declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called with the block changes resulting from a player fertilizing a given
                 * block with bonemeal. Will be called after the applicable
                 * {@link StructureGrowEvent}.
                 */
                // @ts-ignore
                class BlockFertilizeEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, player: org.bukkit.entity.Player, blocks: java.util.List<org.bukkit.block.BlockState> | Array<org.bukkit.block.BlockState>)
                    /**
                     * Gets the player that triggered the fertilization.
                     * @return triggering player, or null if not applicable
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player
                    /**
                     * Gets a list of all blocks changed by the fertilization.
                     * @return list of all changed blocks
                     */
                    // @ts-ignore
                    public getBlocks(): Array<org.bukkit.block.BlockState>
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
