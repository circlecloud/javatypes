declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Sent when an entity's swimming status is toggled.
                 */
                // @ts-ignore
                class EntityToggleSwimEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.LivingEntity, isSwimming: boolean)
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public isSwimming(): boolean
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
