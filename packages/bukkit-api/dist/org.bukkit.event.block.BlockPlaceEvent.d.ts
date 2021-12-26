declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block is placed by a player.
                 * <p>
                 * If a Block Place event is cancelled, the block will not be placed.
                 */
                // @ts-ignore
                class BlockPlaceEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(placedBlock: org.bukkit.block.Block, replacedBlockState: org.bukkit.block.BlockState, placedAgainst: org.bukkit.block.Block, itemInHand: org.bukkit.inventory.ItemStack, thePlayer: org.bukkit.entity.Player, canBuild: boolean)
                    // @ts-ignore
                    constructor(placedBlock: org.bukkit.block.Block, replacedBlockState: org.bukkit.block.BlockState, placedAgainst: org.bukkit.block.Block, itemInHand: org.bukkit.inventory.ItemStack, thePlayer: org.bukkit.entity.Player, canBuild: boolean, hand: org.bukkit.inventory.EquipmentSlot)
                    // @ts-ignore
                    cancel: boolean
                    // @ts-ignore
                    placedAgainst: org.bukkit.block.Block
                    // @ts-ignore
                    replacedBlockState: org.bukkit.block.BlockState
                    // @ts-ignore
                    itemInHand: org.bukkit.inventory.ItemStack
                    // @ts-ignore
                    player: org.bukkit.entity.Player
                    // @ts-ignore
                    hand: org.bukkit.inventory.EquipmentSlot
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the player who placed the block involved in this event.
                     * @return The Player who placed the block involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player
                    /**
                     * Clarity method for getting the placed block. Not really needed except
                     * for reasons of clarity.
                     * @return The Block that was placed
                     */
                    // @ts-ignore
                    public getBlockPlaced(): org.bukkit.block.Block
                    /**
                     * Gets the BlockState for the block which was replaced. Material type air
                     * mostly.
                     * @return The BlockState for the block which was replaced.
                     */
                    // @ts-ignore
                    public getBlockReplacedState(): org.bukkit.block.BlockState
                    /**
                     * Gets the block that this block was placed against
                     * @return Block the block that the new block was placed against
                     */
                    // @ts-ignore
                    public getBlockAgainst(): org.bukkit.block.Block
                    /**
                     * Gets the item in the player's hand when they placed the block.
                     * @return The ItemStack for the item in the player's hand when they
                     *      placed the block
                     */
                    // @ts-ignore
                    public getItemInHand(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the hand which placed the block
                     * @return Main or off-hand, depending on which hand was used to place the block
                     */
                    // @ts-ignore
                    public getHand(): org.bukkit.inventory.EquipmentSlot
                    /**
                     * Gets the value whether the player would be allowed to build here.
                     * Defaults to spawn if the server was going to stop them (such as, the
                     * player is in Spawn). Note that this is an entirely different check
                     * than BLOCK_CANBUILD, as this refers to a player, not universe-physics
                     * rule like cactus on dirt.
                     * @return boolean whether the server would allow a player to build here
                     */
                    // @ts-ignore
                    public canBuild(): boolean
                    /**
                     * Sets the canBuild state of this event. Set to true if you want the
                     * player to be able to build.
                     * @param canBuild true if you want the player to be able to build
                     */
                    // @ts-ignore
                    public setBuild(canBuild: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
