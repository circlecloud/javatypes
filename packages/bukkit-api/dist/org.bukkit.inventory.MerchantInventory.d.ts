declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a trading inventory between a player and a merchant.
             * <br>
             * The holder of this Inventory is the owning Villager, or null if the player is
             * trading with a merchant created by a plugin.
             */
            // @ts-ignore
            interface MerchantInventory extends org.bukkit.inventory.Inventory {
                /**
                 * Get the index of the currently selected recipe.
                 * @return the index of the currently selected recipe
                 */
                // @ts-ignore
                getSelectedRecipeIndex(): number /*int*/
                /**
                 * Get the currently active recipe.
                 * <p>
                 * This will be <code>null</code> if the items provided by the player do
                 * not match the ingredients of the selected recipe. This does not
                 * necessarily match the recipe selected by the player: If the player has
                 * selected the first recipe, the merchant will search all of its offers
                 * for a matching recipe to activate.
                 * @return the currently active recipe
                 */
                // @ts-ignore
                getSelectedRecipe(): org.bukkit.inventory.MerchantRecipe
                /**
                 * Gets the Merchant associated with this inventory.
                 * @return merchant
                 */
                // @ts-ignore
                getMerchant(): org.bukkit.inventory.Merchant
            }
        }
    }
}
