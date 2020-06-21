declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when we try to place a block, to see if we can build it here or not.
                 * <p>
                 * Note:
                 * <ul>
                 * <li>The Block returned by getBlock() is the block we are trying to place
                 * on, not the block we are trying to place.
                 * <li>If you want to figure out what is being placed, use {@link
                 * #getMaterial()} instead.
                 * </ul>
                 */
                // @ts-ignore
                class BlockCanBuildEvent extends org.bukkit.event.block.BlockEvent {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, type: org.bukkit.block.data.BlockData, canBuild: boolean)
                    /**
                     * @param block the block involved in this event
                     * @param player the player placing the block
                     * @param type the id of the block to place
                     * @param canBuild whether we can build
                     */
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, player: org.bukkit.entity.Player, type: org.bukkit.block.data.BlockData, canBuild: boolean)
                    // @ts-ignore
                    buildable: boolean
                    // @ts-ignore
                    blockData: org.bukkit.block.data.BlockData
                    /**
                     * Gets whether or not the block can be built here.
                     * <p>
                     * By default, returns Minecraft's answer on whether the block can be
                     * built here or not.
                     * @return boolean whether or not the block can be built
                     */
                    // @ts-ignore
                    public isBuildable(): boolean
                    /**
                     * Sets whether the block can be built here or not.
                     * @param cancel true if you want to allow the block to be built here
                     *      despite Minecraft's default behaviour
                     */
                    // @ts-ignore
                    public setBuildable(cancel: boolean): void
                    /**
                     * Gets the Material that we are trying to place.
                     * @return The Material that we are trying to place
                     */
                    // @ts-ignore
                    public getMaterial(): org.bukkit.Material
                    /**
                     * Gets the BlockData that we are trying to place.
                     * @return The BlockData that we are trying to place
                     */
                    // @ts-ignore
                    public getBlockData(): org.bukkit.block.data.BlockData
                    /**
                     * Gets the player who placed the block involved in this event.
                     * <br>
                     * May be null for legacy calls of the event.
                     * @return The Player who placed the block involved in this event
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
