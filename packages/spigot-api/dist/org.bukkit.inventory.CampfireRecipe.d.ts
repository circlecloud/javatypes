declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a campfire recipe.
             */
            // @ts-ignore
            class CampfireRecipe extends org.bukkit.inventory.CookingRecipe<org.bukkit.inventory.CampfireRecipe> {
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, source: org.bukkit.Material, experience: number /*float*/, cookingTime: number /*int*/)
                // @ts-ignore
                constructor(key: org.bukkit.NamespacedKey, result: org.bukkit.inventory.ItemStack, input: org.bukkit.inventory.RecipeChoice, experience: number /*float*/, cookingTime: number /*int*/)
            }
        }
    }
}
