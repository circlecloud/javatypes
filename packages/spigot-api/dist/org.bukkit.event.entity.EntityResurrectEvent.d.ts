declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity dies and may have the opportunity to be resurrected.
                 * Will be called in a cancelled state if the entity does not have a totem
                 * equipped.
                 */
                // @ts-ignore
                class EntityResurrectEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.LivingEntity)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.LivingEntity
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
