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
                    public getEntity(): org.bukkit.entity.LivingEntity
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancelled: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
