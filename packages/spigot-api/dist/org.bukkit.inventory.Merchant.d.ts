declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a merchant. A merchant is a special type of inventory which can
             * facilitate custom trades between items.
             */
            // @ts-ignore
            interface Merchant {
                /**
                 * Get a list of trades currently available from this merchant.
                 * @return an immutable list of trades
                 */
                // @ts-ignore
                getRecipes(): java.util.List<org.bukkit.inventory.MerchantRecipe>
                /**
                 * Set the list of trades currently available from this merchant.
                 * <br>
                 * This will not change the selected trades of players currently trading
                 * with this merchant.
                 * @param recipes a list of recipes
                 */
                // @ts-ignore
                setRecipes(recipes: Array<org.bukkit.inventory.MerchantRecipe>): void
                /**
                 * Get the recipe at a certain index of this merchant's trade list.
                 * @param i the index
                 * @return the recipe
                 * @throws IndexOutOfBoundsException if recipe index out of bounds
                 */
                // @ts-ignore
                getRecipe(i: number /*int*/): org.bukkit.inventory.MerchantRecipe
                /**
                 * Set the recipe at a certain index of this merchant's trade list.
                 * @param i the index
                 * @param recipe the recipe
                 * @throws IndexOutOfBoundsException if recipe index out of bounds
                 */
                // @ts-ignore
                setRecipe(i: number /*int*/, recipe: org.bukkit.inventory.MerchantRecipe): void
                /**
                 * Get the number of trades this merchant currently has available.
                 * @return the recipe count
                 */
                // @ts-ignore
                getRecipeCount(): int
                /**
                 * Gets whether this merchant is currently trading.
                 * @return whether the merchant is trading
                 */
                // @ts-ignore
                isTrading(): boolean
                /**
                 * Gets the player this merchant is trading with, or null if it is not
                 * currently trading.
                 * @return the trader, or null
                 */
                // @ts-ignore
                getTrader(): org.bukkit.entity.HumanEntity
            }
        }
    }
}
