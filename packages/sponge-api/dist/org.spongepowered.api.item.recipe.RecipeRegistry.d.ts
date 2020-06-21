declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace recipe {
                    /**
                     * A RecipeRegistry holds all registered recipes for a given game.
                     */
                    // @ts-ignore
                    interface RecipeRegistry<T extends org.spongepowered.api.item.recipe.Recipe> extends org.spongepowered.api.registry.CatalogRegistryModule<T> {
                        /**
                         * Registers the given {@link Recipe} to make it available to craft.
                         * @param recipe The {#link Recipe} to register
                         * @deprecated Use the event {#link org.spongepowered.api.event.game.GameRegistryEvent.Register}
                         */
                        // @ts-ignore
                        register(recipe: T): void
                        /**
                         * Retrieves all recipes registered in this registry.
                         * @return An unmodifiable collection of registered recipes
                         * @deprecated Use {#link #getAll()} instead.
                         */
                        // @ts-ignore
                        getRecipes(): Array<T>
                    }
                }
            }
        }
    }
}
