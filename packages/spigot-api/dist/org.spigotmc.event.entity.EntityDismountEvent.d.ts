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
                    public getDismounted(): org.bukkit.entity.Entity
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
