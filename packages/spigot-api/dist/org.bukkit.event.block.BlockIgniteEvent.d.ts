declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                /**
                 * Called when a block is ignited. If you want to catch when a Player places
                 * fire, you need to use {@link BlockPlaceEvent}.
                 * <p>
                 * If a Block Ignite event is cancelled, the block will not be ignited.
                 */
                // @ts-ignore
                class BlockIgniteEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, cause: org.bukkit.event.block.BlockIgniteEvent.IgniteCause, ignitingEntity: org.bukkit.entity.Entity)
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, cause: org.bukkit.event.block.BlockIgniteEvent.IgniteCause, ignitingBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    constructor(theBlock: org.bukkit.block.Block, cause: org.bukkit.event.block.BlockIgniteEvent.IgniteCause, ignitingEntity: org.bukkit.entity.Entity, ignitingBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the cause of block ignite.
                     * @return An IgniteCause value detailing the cause of block ignition
                     */
                    // @ts-ignore
                    getCause(): org.bukkit.event.block.BlockIgniteEvent.IgniteCause
                    /**
                     * Gets the player who ignited this block
                     * @return The Player that placed/ignited the fire block, or null if not ignited by a Player.
                     */
                    // @ts-ignore
                    getPlayer(): org.bukkit.entity.Player
                    /**
                     * Gets the entity who ignited this block
                     * @return The Entity that placed/ignited the fire block, or null if not ignited by a Entity.
                     */
                    // @ts-ignore
                    getIgnitingEntity(): org.bukkit.entity.Entity
                    /**
                     * Gets the block which ignited this block
                     * @return The Block that placed/ignited the fire block, or null if not ignited by a Block.
                     */
                    // @ts-ignore
                    getIgnitingBlock(): org.bukkit.block.Block
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
