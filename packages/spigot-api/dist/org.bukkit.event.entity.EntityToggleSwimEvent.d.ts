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
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    isSwimming(): boolean
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
