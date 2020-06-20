declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Thrown when a entity picks an item up from the ground
                 */
                // @ts-ignore
                class EntityPickupItemEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.LivingEntity, item: org.bukkit.entity.Item, remaining: number /*int*/)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.LivingEntity
                    /**
                     * Gets the Item picked up by the entity.
                     * @return Item
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.entity.Item
                    /**
                     * Gets the amount remaining on the ground, if any
                     * @return amount remaining on the ground
                     */
                    // @ts-ignore
                    getRemaining(): int
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
