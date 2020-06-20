declare namespace org {
    namespace bukkit {
        namespace event {
            namespace player {
                /**
                 * Represents an event that is called when a player interacts with an object or
                 * air, potentially fired once for each hand. The hand can be determined using
                 * {@link #getHand()}.
                 * <p>
                 * This event will fire as cancelled if the vanilla behavior is to do nothing
                 * (e.g interacting with air). For the purpose of avoiding doubt, this means
                 * that the event will only be in the cancelled state if it is fired as a result
                 * of some prediction made by the server where no subsequent code will run,
                 * rather than when the subsequent interaction activity (e.g. placing a block in
                 * an illegal position ({@link BlockCanBuildEvent}) will fail.
                 */
                // @ts-ignore
                class PlayerInteractEvent extends org.bukkit.event.player.PlayerEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, action: org.bukkit.event.block.Action, item: org.bukkit.inventory.ItemStack, clickedBlock: org.bukkit.block.Block, clickedFace: org.bukkit.block.BlockFace)
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.Player, action: org.bukkit.event.block.Action, item: org.bukkit.inventory.ItemStack, clickedBlock: org.bukkit.block.Block, clickedFace: org.bukkit.block.BlockFace, hand: org.bukkit.inventory.EquipmentSlot)
                    // @ts-ignore
                    item: org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    action: org.bukkit.event.block.Action
                    // @ts-ignore
                    blockClicked: org.bukkit.block.Block
                    // @ts-ignore
                    blockFace: org.bukkit.block.BlockFace
                    /**
                     * Returns the action type
                     * @return Action returns the type of interaction
                     */
                    // @ts-ignore
                    getAction(): org.bukkit.event.block.Action
                    /**
                     * Gets the cancellation state of this event. Set to true if you want to
                     * prevent buckets from placing water and so forth
                     * @return boolean cancellation state
                     * @deprecated This event has two possible cancellation states, one for
                     *  {#link #useInteractedBlock()} and one for {@link #useItemInHand()}. It is
                     *  possible a call might have the former false, but the latter true, eg in
                     *  the case of using a firework whilst gliding. Callers should check the
                     *  relevant methods individually.
                     */
                    // @ts-ignore
                    isCancelled(): boolean
                    /**
                     * Sets the cancellation state of this event. A canceled event will not be
                     * executed in the server, but will still pass to other plugins
                     * <p>
                     * Canceling this event will prevent use of food (player won't lose the
                     * food item), prevent bows/snowballs/eggs from firing, etc. (player won't
                     * lose the ammo)
                     * @param cancel true if you wish to cancel this event
                     */
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Returns the item in hand represented by this event
                     * @return ItemStack the item used
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Convenience method. Returns the material of the item represented by
                     * this event
                     * @return Material the material of the item used
                     */
                    // @ts-ignore
                    getMaterial(): org.bukkit.Material
                    /**
                     * Check if this event involved a block
                     * @return boolean true if it did
                     */
                    // @ts-ignore
                    hasBlock(): boolean
                    /**
                     * Check if this event involved an item
                     * @return boolean true if it did
                     */
                    // @ts-ignore
                    hasItem(): boolean
                    /**
                     * Convenience method to inform the user whether this was a block
                     * placement event.
                     * @return boolean true if the item in hand was a block
                     */
                    // @ts-ignore
                    isBlockInHand(): boolean
                    /**
                     * Returns the clicked block
                     * @return Block returns the block clicked with this item.
                     */
                    // @ts-ignore
                    getClickedBlock(): org.bukkit.block.Block
                    /**
                     * Returns the face of the block that was clicked
                     * @return BlockFace returns the face of the block that was clicked
                     */
                    // @ts-ignore
                    getBlockFace(): org.bukkit.block.BlockFace
                    /**
                     * This controls the action to take with the block (if any) that was
                     * clicked on. This event gets processed for all blocks, but most don't
                     * have a default action
                     * @return the action to take with the interacted block
                     */
                    // @ts-ignore
                    useInteractedBlock(): org.bukkit.event.Event.Result
                    /**
                     * @param useInteractedBlock the action to take with the interacted block
                     */
                    // @ts-ignore
                    setUseInteractedBlock(useInteractedBlock: org.bukkit.event.Event.Result): void
                    /**
                     * This controls the action to take with the item the player is holding.
                     * This includes both blocks and items (such as flint and steel or
                     * records). When this is set to default, it will be allowed if no action
                     * is taken on the interacted block.
                     * @return the action to take with the item in hand
                     */
                    // @ts-ignore
                    useItemInHand(): org.bukkit.event.Event.Result
                    /**
                     * @param useItemInHand the action to take with the item in hand
                     */
                    // @ts-ignore
                    setUseItemInHand(useItemInHand: org.bukkit.event.Event.Result): void
                    /**
                     * The hand used to perform this interaction. May be null in the case of
                     * {@link Action#PHYSICAL}.
                     * @return the hand used to interact. May be null.
                     */
                    // @ts-ignore
                    getHand(): org.bukkit.inventory.EquipmentSlot
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
