declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Called when a portal is created
                 */
                // @ts-ignore
                class PortalCreateEvent extends org.bukkit.event.world.WorldEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(blocks: Array<org.bukkit.block.BlockState>, world: org.bukkit.World, reason: org.bukkit.event.world.PortalCreateEvent.CreateReason)
                    // @ts-ignore
                    constructor(blocks: Array<org.bukkit.block.BlockState>, world: org.bukkit.World, entity: org.bukkit.entity.Entity, reason: org.bukkit.event.world.PortalCreateEvent.CreateReason)
                    /**
                     * Gets an array list of all the blocks associated with the created portal
                     * @return array list of all the blocks associated with the created portal
                     */
                    // @ts-ignore
                    getBlocks(): java.util.List<org.bukkit.block.BlockState>
                    /**
                     * Returns the Entity that triggered this portal creation (if available)
                     * @return Entity involved in this event
                     */
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Entity
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the reason for the portal's creation
                     * @return CreateReason for the portal's creation
                     */
                    // @ts-ignore
                    getReason(): org.bukkit.event.world.PortalCreateEvent.CreateReason
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
