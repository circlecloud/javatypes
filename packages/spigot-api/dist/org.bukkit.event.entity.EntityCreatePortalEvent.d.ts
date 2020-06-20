declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Thrown when a Living Entity creates a portal in a world.
                 * @deprecated Use {#link PortalCreateEvent}
                 */
                // @ts-ignore
                class EntityCreatePortalEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.LivingEntity, blocks: Array<org.bukkit.block.BlockState>, type: org.bukkit.PortalType)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.LivingEntity
                    /**
                     * Gets a list of all blocks associated with the portal.
                     * @return List of blocks that will be changed.
                     */
                    // @ts-ignore
                    getBlocks(): java.util.List<org.bukkit.block.BlockState>
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the type of portal that is trying to be created.
                     * @return Type of portal.
                     */
                    // @ts-ignore
                    getPortalType(): org.bukkit.PortalType
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
