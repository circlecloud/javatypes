declare namespace org {
    namespace spigotmc {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity attempts to ride another entity.
                 */
                // @ts-ignore
                class EntityMountEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity, mount: org.bukkit.entity.Entity)
                    // @ts-ignore
                    getMount(): org.bukkit.entity.Entity
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
