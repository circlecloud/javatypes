declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity comes into contact with a portal
                 */
                // @ts-ignore
                class EntityPortalEnterEvent extends org.bukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, location: org.bukkit.Location)
                    /**
                     * Gets the portal block the entity is touching
                     * @return The portal block the entity is touching
                     */
                    // @ts-ignore
                    getLocation(): org.bukkit.Location
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
