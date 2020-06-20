declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a human entity's food level changes
                 */
                // @ts-ignore
                class FoodLevelChangeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.HumanEntity, level: number /*int*/)
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.HumanEntity, level: number /*int*/, item: org.bukkit.inventory.ItemStack)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.HumanEntity
                    /**
                     * Gets the item that triggered this event, if any.
                     * @return an ItemStack for the item being consumed
                     */
                    // @ts-ignore
                    getItem(): org.bukkit.inventory.ItemStack
                    /**
                     * Gets the resultant food level that the entity involved in this event
                     * should be set to.
                     * <p>
                     * Where 20 is a full food bar and 0 is an empty one.
                     * @return The resultant food level
                     */
                    // @ts-ignore
                    getFoodLevel(): int
                    /**
                     * Sets the resultant food level that the entity involved in this event
                     * should be set to
                     * @param level the resultant food level that the entity involved in this
                     *      event should be set to
                     */
                    // @ts-ignore
                    setFoodLevel(level: number /*int*/): void
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
