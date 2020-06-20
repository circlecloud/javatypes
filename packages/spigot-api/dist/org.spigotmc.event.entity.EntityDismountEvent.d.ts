declare namespace org {
    namespace spigotmc {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity stops riding another entity.
                 */
                // @ts-ignore
                class EntityDismountEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, dismounted: org.bukkit.entity.Entity)
                    // @ts-ignore
                    getDismounted(): org.bukkit.entity.Entity
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
