declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called whenever a villager acquires a new trade.
                 */
                // @ts-ignore
                class VillagerAcquireTradeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.AbstractVillager, recipe: org.bukkit.inventory.MerchantRecipe)
                    /**
                     * Get the recipe to be acquired.
                     * @return the new recipe
                     */
                    // @ts-ignore
                    getRecipe(): org.bukkit.inventory.MerchantRecipe
                    /**
                     * Set the recipe to be acquired.
                     * @param recipe the new recipe
                     */
                    // @ts-ignore
                    setRecipe(recipe: org.bukkit.inventory.MerchantRecipe): void
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.AbstractVillager
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
