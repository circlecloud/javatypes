declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapedCraftingRecipe {
                            namespace Builder {
                                /**
                                 * In this Step set the group of the Recipe and/or build it.
                                 */
                                // @ts-ignore
                                interface EndStep extends org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder, org.spongepowered.api.util.CatalogBuilder<org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe, org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder> {
                                    /**
                                     * Sets the group of the recipe.
                                     * @param name the group
                                     * @return This builder, for chaining
                                     */
                                    // @ts-ignore
                                    group(name: java.lang.String | string): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    id(id: java.lang.String | string): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    name(name: java.lang.String | string): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    name(name: org.spongepowered.api.text.translation.Translation): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.EndStep
                                    /**
                                     * Builds a {@link ShapedCraftingRecipe} from this builder.
                                     * @param id The id of this recipe.
                                     * @param plugin The owning plugin.
                                     * @return A new {#link ShapedCraftingRecipe}
                                     * @throws IllegalStateException If not all required options
                                     *      were specified
                                     * @deprecated Use {#link #build()} instead in combination with {@link #id(String)}
                                     */
                                    // @ts-ignore
                                    build(id: java.lang.String | string, plugin: java.lang.Object | any): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
