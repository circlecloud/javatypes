declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Thrown when a LivingEntity is tamed
                 */
                // @ts-ignore
                class EntityTameEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.LivingEntity, owner: org.bukkit.entity.AnimalTamer)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.LivingEntity
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the owning AnimalTamer
                     * @return the owning AnimalTamer
                     */
                    // @ts-ignore
                    getOwner(): org.bukkit.entity.AnimalTamer
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
