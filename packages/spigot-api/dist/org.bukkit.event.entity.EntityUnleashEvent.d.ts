declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called immediately prior to an entity being unleashed.
                 */
                // @ts-ignore
                class EntityUnleashEvent extends org.bukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, reason: org.bukkit.event.entity.EntityUnleashEvent.UnleashReason)
                    /**
                     * Returns the reason for the unleashing.
                     * @return The reason
                     */
                    // @ts-ignore
                    getReason(): org.bukkit.event.entity.EntityUnleashEvent.UnleashReason
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
