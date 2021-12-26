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
                    constructor(what: org.bukkit.entity.LivingEntity, blocks: java.util.List<org.bukkit.block.BlockState> | Array<org.bukkit.block.BlockState>, type: org.bukkit.PortalType)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.LivingEntity
                    /**
                     * Gets a list of all blocks associated with the portal.
                     * @return List of blocks that will be changed.
                     */
                    // @ts-ignore
                    public getBlocks(): Array<org.bukkit.block.BlockState>
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    /**
                     * Gets the type of portal that is trying to be created.
                     * @return Type of portal.
                     */
                    // @ts-ignore
                    public getPortalType(): org.bukkit.PortalType
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
