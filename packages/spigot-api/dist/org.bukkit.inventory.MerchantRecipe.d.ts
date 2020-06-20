declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a merchant's trade.
             * Trades can take one or two ingredients, and provide one result. The
             * ingredients' ItemStack amounts are respected in the trade.
             * <br>
             * A trade has a limited number of uses, after which the trade can no longer be
             * used, unless the player uses a different trade, which will cause its maximum
             * uses to increase.
             * <br>
             * A trade may or may not reward experience for being completed.
             * @see org.bukkit.event.entity.VillagerReplenishTradeEvent
             */
            // @ts-ignore
            class MerchantRecipe extends java.lang.Object implements org.bukkit.inventory.Recipe {
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, maxUses: number /*int*/)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, uses: number /*int*/, maxUses: number /*int*/, experienceReward: boolean)
                // @ts-ignore
                constructor(result: org.bukkit.inventory.ItemStack, uses: number /*int*/, maxUses: number /*int*/, experienceReward: boolean, villagerExperience: number /*int*/, priceMultiplier: number /*float*/)
                // @ts-ignore
                getResult(): org.bukkit.inventory.ItemStack
                // @ts-ignore
                addIngredient(item: org.bukkit.inventory.ItemStack): void
                // @ts-ignore
                removeIngredient(index: number /*int*/): void
                // @ts-ignore
                setIngredients(ingredients: Array<org.bukkit.inventory.ItemStack>): void
                // @ts-ignore
                getIngredients(): java.util.List<org.bukkit.inventory.ItemStack>
                /**
                 * Get the number of times this trade has been used.
                 * @return the number of uses
                 */
                // @ts-ignore
                getUses(): int
                /**
                 * Set the number of times this trade has been used.
                 * @param uses the number of uses
                 */
                // @ts-ignore
                setUses(uses: number /*int*/): void
                /**
                 * Get the maximum number of uses this trade has.
                 * <br>
                 * The maximum uses of this trade may increase when a player trades with the
                 * owning merchant.
                 * @return the maximum number of uses
                 */
                // @ts-ignore
                getMaxUses(): int
                /**
                 * Set the maximum number of uses this trade has.
                 * @param maxUses the maximum number of time this trade can be used
                 */
                // @ts-ignore
                setMaxUses(maxUses: number /*int*/): void
                /**
                 * Whether to reward experience to the player for the trade.
                 * @return whether to reward experience to the player for completing this
                 *  trade
                 */
                // @ts-ignore
                hasExperienceReward(): boolean
                /**
                 * Set whether to reward experience to the player for the trade.
                 * @param flag whether to reward experience to the player for completing
                 *  this trade
                 */
                // @ts-ignore
                setExperienceReward(flag: boolean): void
                /**
                 * Gets the amount of experience the villager earns from this trade.
                 * @return villager experience
                 */
                // @ts-ignore
                getVillagerExperience(): int
                /**
                 * Sets the amount of experience the villager earns from this trade.
                 * @param villagerExperience new experience amount
                 */
                // @ts-ignore
                setVillagerExperience(villagerExperience: number /*int*/): void
                /**
                 * Gets the additive price multiplier for the cost of this trade.
                 * @return price multiplier
                 */
                // @ts-ignore
                getPriceMultiplier(): float
                /**
                 * Sets the additive price multiplier for the cost of this trade.
                 * @param priceMultiplier new price multiplier
                 */
                // @ts-ignore
                setPriceMultiplier(priceMultiplier: number /*float*/): void
            }
        }
    }
}
