declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called before an entity exits a portal.
                 * <p>
                 * This event allows you to modify the velocity of the entity after they have
                 * successfully exited the portal.
                 */
                // @ts-ignore
                class EntityPortalExitEvent extends org.bukkit.event.entity.EntityTeleportEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, from: org.bukkit.Location, to: org.bukkit.Location, before: org.bukkit.util.Vector, after: org.bukkit.util.Vector)
                    /**
                     * Gets a copy of the velocity that the entity has before entering the
                     * portal.
                     * @return velocity of entity before entering the portal
                     */
                    // @ts-ignore
                    public getBefore(): org.bukkit.util.Vector
                    /**
                     * Gets a copy of the velocity that the entity will have after exiting the
                     * portal.
                     * @return velocity of entity after exiting the portal
                     */
                    // @ts-ignore
                    public getAfter(): org.bukkit.util.Vector
                    /**
                     * Sets the velocity that the entity will have after exiting the portal.
                     * @param after the velocity after exiting the portal
                     */
                    // @ts-ignore
                    public setAfter(after: org.bukkit.util.Vector): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
