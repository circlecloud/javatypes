declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    namespace crafting {
                        namespace ShapedCraftingRecipe {
                            /**
                             * The builder which you create {@link ShapedCraftingRecipe}s through.
                             * <p>First decide how you want to build your recipe. Either by defining
                             * the pattern with {@link #aisle} and then setting {@link AisleStep#where}
                             * the ingredients are, or by defining the pattern using {@link #rows}
                             * adding each {@link RowsStep#row} of ingredients after the other. When the
                             * ingredients are set define the {@link ResultStep#result} of the recipe.
                             * Next you can define its {@link EndStep#group}. And
                             * finally {@link EndStep#build} your recipe.</p>
                             * <p>Here is an example, where the two resulting recipes are identical:</p>
                             * <pre>
                             * {@code
                             * Ingredient log = Ingredient.of(LOG);
                             * ShapedCraftingRecipe.builder()
                             * .aisle("sss")
                             * .where('s', log)
                             * .result(ItemStack.of(WOODEN_PRESSURE_PLATE, 1))
                             * .build("mypressureplate", plugin);
                             * ShapedCraftingRecipe.builder()
                             * .rows()
                             * .row(log, log, log)
                             * .result(ItemStack.of(WOODEN_PRESSURE_PLATE, 1))
                             * .build("mypressureplate", plugin);
                             * }
                             * </pre>
                             */
                            // @ts-ignore
                            interface Builder extends org.spongepowered.api.util.ResettableBuilder<org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe, org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder> {
                                /**
                                 * Start building a new recipe based on the aisle pattern.
                                 * <p>Use {@link AisleStep#where} to assign ingredients to characters
                                 * of the aisles.</p>
                                 * <p>The space character will be defaulted to {@link Ingredient#NONE}
                                 * if not specified.</p>
                                 * <p>Any other not assigned characters will cause an Exception
                                 * when {@link EndStep#build}ing the Recipe.</p>
                                 * @param aisle A string array of ingredients
                                 * @return The builder
                                 */
                                // @ts-ignore
                                aisle(...aisle: java.lang.String[] | string[]): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.AisleStep
                                /**
                                 * Start building a new recipe with ingredients based on rows.
                                 * After this call {@link RowsStep#row} for each row of your recipe.
                                 * @return This builder
                                 */
                                // @ts-ignore
                                rows(): org.spongepowered.api.item.recipe.crafting.ShapedCraftingRecipe.Builder.RowsStep
                            }
                        }
                    }
                }
            }
        }
    }
}
