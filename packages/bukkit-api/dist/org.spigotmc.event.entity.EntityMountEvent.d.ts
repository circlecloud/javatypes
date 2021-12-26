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
                    public getMount(): org.bukkit.entity.Entity
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
