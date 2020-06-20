declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Sent when an entity's gliding status is toggled with an Elytra.
                 * Examples of when this event would be called:
                 * <ul>
                 * <li>Player presses the jump key while in midair and using an Elytra</li>
                 * <li>Player lands on ground while they are gliding (with an Elytra)</li>
                 * </ul>
                 * This can be visually estimated by the animation in which a player turns horizontal.
                 */
                // @ts-ignore
                class EntityToggleGlideEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(who: org.bukkit.entity.LivingEntity, isGliding: boolean)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    isGliding(): boolean
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
