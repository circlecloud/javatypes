declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapelessCraftingRecipe {
                            namespace Builder {
                                /**
                                 * In this Step set the group of the Recipe and/or build it.
                                 */
                                // @ts-ignore
                                interface EndStep extends org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder, org.spongepowered.api.util.CatalogBuilder<org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe, org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder> {
                                    /**
                                     * Sets the group of the recipe.
                                     * @param name the group
                                     * @return This builder, for chaining
                                     */
                                    // @ts-ignore
                                    group(name: java.lang.String | string): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    id(id: java.lang.String | string): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    name(name: java.lang.String | string): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    name(name: org.spongepowered.api.text.translation.Translation): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe.Builder.EndStep
                                    /**
                                     * Builds a new {@link ShapelessCraftingRecipe} from this builder.
                                     * @param id The id of this recipe.
                                     * @param plugin The owning plugin.
                                     * @return A new {#link ShapelessCraftingRecipe}
                                     * @throws IllegalStateException If not all required options
                                     *      were specified
                                     * @deprecated Use {#link #build()} instead in combination with {@link #id(String)}
                                     */
                                    // @ts-ignore
                                    build(id: java.lang.String | string, plugin: java.lang.Object | any): org.spongepowered.api.item.recipe.crafting.ShapelessCraftingRecipe
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
