declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block is broken by a player.
                 * <p>
                 * If you wish to have the block drop experience, you must set the experience
                 * value above 0. By default, experience will be set in the event if:
                 * <ol>
                 * <li>The player is not in creative or adventure mode
                 * <li>The player can loot the block (ie: does not destroy it completely, by
                 * using the correct tool)
                 * <li>The player does not have silk touch
                 * <li>The block drops experience in vanilla Minecraft
                 * </ol>
                 * <p>
                 * Note:
                 * Plugins wanting to simulate a traditional block drop should set the block
                 * to air and utilize their own methods for determining what the default drop
                 * for the block being broken is and what to do about it, if anything.
                 * <p>
                 * If a Block Break event is cancelled, the block will not break and
                 * experience will not drop.
                 */
                // @ts-ignore
                class BlockBreakEvent extends org.bukkit.event.block.BlockExpEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, player: org.bukkit.entity.Player)
                    /**
                     * Gets the Player that is breaking the block involved in this event.
                     * @return The Player that is breaking the block involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player
                    /**
                     * Sets whether or not the block will drop items as it normally would.
                     * @param dropItems Whether or not the block will drop items
                     */
                    // @ts-ignore
                    public setDropItems(dropItems: boolean): void
                    /**
                     * Gets whether or not the block will drop items.
                     * @return Whether or not the block will drop items
                     */
                    // @ts-ignore
                    public isDropItems(): boolean
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                }
            }
        }
    }
}
