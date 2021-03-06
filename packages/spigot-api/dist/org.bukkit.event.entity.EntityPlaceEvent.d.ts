declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Triggered when a entity is created in the world by a player "placing" an item
                 * on a block.
                 * <br>
                 * Note that this event is currently only fired for four specific placements:
                 * armor stands, boats, minecarts, and end crystals.
                 * @deprecated draft API
                 */
                // @ts-ignore
                class EntityPlaceEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, player: org.bukkit.entity.Player, block: org.bukkit.block.Block, blockFace: org.bukkit.block.BlockFace)
                    /**
                     * Returns the player placing the entity
                     * @return the player placing the entity
                     */
                    // @ts-ignore
                    public getPlayer(): org.bukkit.entity.Player
                    /**
                     * Returns the block that the entity was placed on
                     * @return the block that the entity was placed on
                     */
                    // @ts-ignore
                    public getBlock(): org.bukkit.block.Block
                    /**
                     * Returns the face of the block that the entity was placed on
                     * @return the face of the block that the entity was placed on
                     */
                    // @ts-ignore
                    public getBlockFace(): org.bukkit.block.BlockFace
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
