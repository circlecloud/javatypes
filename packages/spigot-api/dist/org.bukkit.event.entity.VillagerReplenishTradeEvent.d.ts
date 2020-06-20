declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a villager's trade's maximum uses is increased, due to a player's
                 * trade.
                 * @see MerchantRecipe#getMaxUses()
                 */
                // @ts-ignore
                class VillagerReplenishTradeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.AbstractVillager, recipe: org.bukkit.inventory.MerchantRecipe, bonus: number /*int*/)
                    /**
                     * Get the recipe to replenish.
                     * @return the replenished recipe
                     */
                    // @ts-ignore
                    getRecipe(): org.bukkit.inventory.MerchantRecipe
                    /**
                     * Set the recipe to replenish.
                     * @param recipe the replenished recipe
                     */
                    // @ts-ignore
                    setRecipe(recipe: org.bukkit.inventory.MerchantRecipe): void
                    /**
                     * Get the bonus uses added. The maximum uses of the recipe will be
                     * increased by this number.
                     * @return the extra uses added
                     */
                    // @ts-ignore
                    getBonus(): int
                    /**
                     * Set the bonus uses added.
                     * @param bonus the extra uses added
                     * @see VillagerReplenishTradeEvent#getBonus()
                     */
                    // @ts-ignore
                    setBonus(bonus: number /*int*/): void
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
