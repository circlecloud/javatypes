declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * This event is called whenever a player harvests a block.
                 * <br>
                 * A 'harvest' is when a block drops an item (usually some sort of crop) and
                 * changes state, but is not broken in order to drop the item.
                 * <br>
                 * This event is not called for when a block is broken, to handle that, listen
                 * for {@link org.bukkit.event.block.BlockBreakEvent} and
                 * {@link org.bukkit.event.block.BlockDropItemEvent}.
                 */
                // @ts-ignore
                class PlayerHarvestBlockEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: org.bukkit.entity.Player, harvestedBlock: org.bukkit.block.Block, itemsHarvested: java.util.List<org.bukkit.inventory.ItemStack> | Array<org.bukkit.inventory.ItemStack>)
                    /**
                     * Gets the block that is being harvested.
                     * @return The block that is being harvested
                     */
                    // @ts-ignore
                    public getHarvestedBlock(): org.bukkit.block.Block
                    /**
                     * Gets a list of items that are being harvested from this block.
                     * @return A list of items that are being harvested from this block
                     */
                    // @ts-ignore
                    public getItemsHarvested(): Array<org.bukkit.inventory.ItemStack>
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
