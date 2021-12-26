declare namespace org {
    namespace bukkit {
        namespace inventory {
            /**
             * Represents a potential item match within a recipe. All choices within a
             * recipe must be satisfied for it to be craftable.
             * <b>This class is not legal for implementation by plugins!</b>
             */
            // @ts-ignore
            interface RecipeChoice extends java.util.function.Predicate<org.bukkit.inventory.ItemStack>, java.lang.Cloneable {
                /**
                 * Gets a single item stack representative of this stack choice.
                 * @return a single representative item
                 * @deprecated for compatability only
                 */
                // @ts-ignore
                getItemStack(): org.bukkit.inventory.ItemStack
                // @ts-ignore
                clone(): org.bukkit.inventory.RecipeChoice
                // @ts-ignore
                test(itemStack: org.bukkit.inventory.ItemStack): boolean
            }
        }
    }
}
