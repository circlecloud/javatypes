declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Called when a player interacts with a Bucket
                 */
                // @ts-ignore
                class PlayerBucketEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, block: org.bukkit.block.Block, blockClicked: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace, bucket: org.bukkit.Material, itemInHand: org.bukkit.inventory.ItemStack)
                    /**
                     * Returns the bucket used in this event
                     * @return the used bucket
                     */
                    // @ts-ignore
                    getBucket(): org.bukkit.Material
                    /**
                     * Get the resulting item in hand after the bucket event
                     * @return ItemStack hold in hand after the event.
                     */
                    // @ts-ignore
                    getItemStack(): org.bukkit.inventory.ItemStack
                    /**
                     * Set the item in hand after the event
                     * @param itemStack the new held ItemStack after the bucket event.
                     */
                    // @ts-ignore
                    setItemStack(itemStack: org.bukkit.inventory.ItemStack): void
                    /**
                     * Gets the block involved in this event.
                     * @return The Block which block is involved in this event
                     */
                    // @ts-ignore
                    getBlock(): org.bukkit.block.Block
                    /**
                     * Return the block clicked
                     * @return the clicked block
                     */
                    // @ts-ignore
                    getBlockClicked(): org.bukkit.block.Block
                    /**
                     * Get the face on the clicked block
                     * @return the clicked face
                     */
                    // @ts-ignore
                    getBlockFace(): org.bukkit.block.BlockFace
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                }
            }
        }
    }
}
