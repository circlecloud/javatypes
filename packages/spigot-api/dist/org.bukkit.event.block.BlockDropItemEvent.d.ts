declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called if a block broken by a player drops an item.
                 * If the block break is cancelled, this event won't be called.
                 * If isDropItems in BlockBreakEvent is set to false, this event won't be
                 * called.
                 * This event will also be called if the player breaks a multi block structure,
                 * for example a torch on top of a stone. Both items will have an event call.
                 * The Block is already broken as this event is called, so #getBlock() will be
                 * AIR in most cases. Use #getBlockState() for more Information about the broken
                 * block.
                 */
                // @ts-ignore
                class BlockDropItemEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, blockState: org.bukkit.block.BlockState, player: org.bukkit.entity.Player, items: java.util.List<org.bukkit.entity.Item> | Array<org.bukkit.entity.Item>)
                    /**
                     * Gets the Player that is breaking the block involved in this event.
                     * @return The Player that is breaking the block involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player
                    /**
                     * Gets the BlockState of the block involved in this event before it was
                     * broken.
                     * @return The BlockState of the block involved in this event
                     */
                    // @ts-ignore
                    public getBlockState(): org.bukkit.block.BlockState
                    /**
                     * Gets list of the Item drops caused by the block break.
                     * This list is mutable - removing an item from it will cause it to not
                     * drop. It is not legal however to add new items to the list.
                     * @return The Item the block caused to drop
                     */
                    // @ts-ignore
                    public getItems(): Array<org.bukkit.entity.Item>
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
