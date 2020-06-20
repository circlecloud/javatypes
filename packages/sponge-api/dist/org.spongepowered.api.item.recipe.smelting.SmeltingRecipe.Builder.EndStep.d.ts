declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace smelting {
                        namespace SmeltingRecipe {
                            namespace Builder {
                                // @ts-ignore
                                interface EndStep extends org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder, org.spongepowered.api.util.CatalogBuilder<org.spongepowered.api.item.recipe.smelting.SmeltingRecipe, org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder> {
                                    /**
                                     * Changes the experience and returns this builder. It is the
                                     * required amount of experience the user must possess in order to
                                     * be able to fulfill the recipe.
                                     * @param experience The amount of experience released when this
                                     *      recipe is completed
                                     * @return This builder, for chaining
                                     */
                                    // @ts-ignore
                                    experience(experience: number /*double*/): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    id(id: string): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    name(name: string): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    name(name: org.spongepowered.api.text.translation.Translation): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe.Builder.EndStep
                                    // @ts-ignore
                                    build(): org.spongepowered.api.item.recipe.smelting.SmeltingRecipe
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
